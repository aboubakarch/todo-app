import React from 'react';
import EditForm from './EditForm';
import TodoItem from './TodoItem';

function TodoList({ todos, onEdit, onDelete, isEdit, onSaveEdit }) {
  return (
    <div className="todo-list">
      {todos.map((item, idx) =>
        isEdit !== idx ? (
          <TodoItem item={item} key={idx} onDelete={onDelete} onEdit={onEdit} />
        ) : (
          <EditForm item={item} onSaveEdit={onSaveEdit} />
        )
      )}
    </div>
  );
}

export default TodoList;
