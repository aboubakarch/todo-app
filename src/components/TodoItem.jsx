import React from 'react';

function TodoItem({ item }) {
  return (
    <div className="todo-list-item">
      <p>{item}</p>
    </div>
  );
}

export default TodoItem;
