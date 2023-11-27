import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    // Add more tasks as needed
  ]);

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEdit = (taskId) => {
    const updatedName = prompt('New Name');
    const updatedDescription = prompt('New Description');

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, name: updatedName, description: updatedDescription }
          : task
      )
    );
  };

  const handleAdd = () => {
    if (newTaskName.trim() === '' || newTaskDescription.trim() === '') {
      alert('Please enter both name and description.');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskName('');
    setNewTaskDescription('');
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <label htmlFor="newTaskName">Name:</label>
        <input
          type="text"
          id="newTaskName"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="newTaskDescription">Description:</label>
        <input
          type="text"
          id="newTaskDescription"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
      </div>

      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong> - {task.description}
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
