import React from 'react';

function TodoForm({ value, onChange, onAdd }) {
  return (
    <div className="row">
      <h6>Add Todo list item here</h6>
      <div className="header">
        <input
          onChange={onChange}
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter Todo item"
          value={value}
        />
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}

export default TodoForm;
