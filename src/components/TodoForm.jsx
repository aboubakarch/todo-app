import React from 'react';

function TodoForm({ values: { title, desc }, onChange, onAdd }) {
  return (
    <div className="row">
      <h6>Add Todo list item here</h6>
      <div className="header">
        <input
          onChange={onChange}
          type="text"
          name="title"
          id="title"
          placeholder="Enter Todo Title"
          value={title}
        />
        <input
          onChange={onChange}
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Todo Description"
          value={desc}
        />
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}

export default TodoForm;
