import React from 'react';

export default function Todo({todo, makeCompleted, handleDelete}) {
  return (
    <li className="todo">
      <div className="left">
        {todo.completed ? (
          <img src="/checked-circle.svg" role="button" onClick={() => makeCompleted(todo._id)} />
        ) : (
          <span className="circle" onClick={() => makeCompleted(todo._id)}></span>
        )}
        <p className={`todo__name ${todo.completed ? 'completed' : ''}  `}>{todo.name}</p>
      </div>
      {todo.completed && (
        <img
          src="/icon-cross.svg"
          alt="mark"
          className="right"
          onClick={() => handleDelete(todo._id)}
        />
      )}
    </li>
  );
}
