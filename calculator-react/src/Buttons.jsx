import React from 'react';
import Button from './Button.jsx';

const Buttons = ({ onButtonClick }) => {
  const buttonValues = [
    'AC', 'DEL', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '00', '.', '=',
  ];

  return (
    <div className="buttons">
      {buttonValues.map((btn) => (
        <Button
          key={btn}
          value={btn}
          onClick={onButtonClick}
          className={
            ['/', '*', '-', '+', '=', '%', 'AC', 'DEL'].includes(btn)
              ? 'operator'
              : ''
          }
        />
      ))}
    </div>
  );
};

export default Buttons;