import React from 'react';
import axios from 'axios';

export default function Statistics({todos, setTodos}) {
  const clearCompleted = async () => {
    try {
      const activeTodos = todos.filter(todo => todo.completed);
      setTodos(activeTodos);

      await axios.delete('https://mern-todo-30re.onrender.com/api/v1/todos/');
    } catch (error) {
      console.error('Failed to clear completed todos:', error);
    }
  };

  return (
    <div className="statistics">
      <p>{todos?.length} items left</p>
      <p role="button" onClick={clearCompleted}>
        clear completed
      </p>
    </div>
  );
}
