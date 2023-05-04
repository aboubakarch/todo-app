import { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

class Todo extends Component {
  state = {
    todos: [],
    title: '',
    desc: '',
    isEdit: -1,
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    return this.setState({ [name]: value });
  };

  handleAdd = () => {
    const { title, desc } = this.state;
    const todos = [...this.state.todos];
    todos.push({ title, desc });
    this.setState({ todos, title: '', desc: '' });
  };

  handleDelete = (item) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(item);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleEdit = (item) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(item);
    this.setState({ isEdit: index });
  };

  handleSaveEdit = (item) => {
    const todos = [...this.state.todos];
    const { isEdit } = this.state;
    todos[isEdit] = item;
    this.setState({ isEdit: -1, todos });
  };

  render() {
    const { title, desc, todos, isEdit } = this.state;
    return (
      <>
        <Header />
        <TodoForm
          onChange={this.handleChange}
          values={{ title, desc }}
          onAdd={this.handleAdd}
        />
        <TodoList
          onSaveEdit={this.handleSaveEdit}
          isEdit={isEdit}
          todos={todos}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default Todo;
