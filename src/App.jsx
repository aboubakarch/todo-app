import './App.css';

import { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [],
    value: '',
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleClick = () => {
    const { value: todo } = this.state;
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos, value: '' });
  };

  render() {
    const { value, todos } = this.state;
    return (
      <>
        <TodoForm
          onChange={this.handleChange}
          value={value}
          onAdd={this.handleClick}
        />
        <TodoList todos={todos} />
      </>
    );
  }
}

export default App;
