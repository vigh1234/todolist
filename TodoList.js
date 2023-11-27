import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons

const TodoList = ({ todo, onToggle, onDelete, onEdit }) => {
  const firstLetter = todo.title.charAt(0).toUpperCase(); // Get the first letter

  return (
    <div className="todo-card">
      <div className="circle">{firstLetter}</div>
      <div className="todo-content">
        <span>
          {todo.title} - {todo.description}
        </span>
      </div>
      <div className="todo-actions">
        <span onClick={() => onEdit(todo.id)}>
          <FaEdit />
        </span>
        <span onClick={() => onDelete(todo.id)}>
          <FaTrash />
        </span>
      </div>
    </div>
  );
};

export default TodoList;