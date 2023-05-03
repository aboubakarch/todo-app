import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map((item, idx) => (
        <TodoItem item={item} key={idx} />
      ))}
    </div>
  );
}

export default TodoList;
