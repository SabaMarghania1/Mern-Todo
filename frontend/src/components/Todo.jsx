import React from 'react';

export default function Todo() {
  return (
    <li className="todo">
      <div className="left">
        <span className="circle"></span>
        <p className="todo__name completed">Complete online JavaScript course</p>
      </div>
      <img src="/icon-cross.svg" alt="mark" className="right" />
    </li>
  );
}
