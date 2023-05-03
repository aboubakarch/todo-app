import React from 'react';

function TodoItem({ item, onEdit, onDelete }) {
  return (
    <div className="todo-list-item">
      <h6>{item.title}</h6>
      <p>{item.desc}</p>
      <div>
        <button className="btn btn-edit" onClick={() => onEdit(item)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
