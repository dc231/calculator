import React, { useState } from 'react';
import './App.css';
import Display from './Display.jsx';
import Buttons from './Buttons.jsx';

function App() {
  const [output, setOutput] = useState('');

  const calculate = (btnValue) => {
    if (btnValue === '=' && output !== '') {
      try {
        // If output has '%', replace with '/100' before evaluating.
        setOutput(eval(output.replace('%', '/100')).toString());
      } catch {
        setOutput('Error');
      }
    } else if (btnValue === 'AC') {
      setOutput('');
    } else if (btnValue === 'DEL') {
      // If DEL button is clicked, remove the last character from the output.
      setOutput(output.toString().slice(0, -1));
    } else {
      const specialChars = ["%", "*", "/", "-", "+", "="];
      // If output is empty and button is specialChars then return
      if (output === '' && specialChars.includes(btnValue)) return;
      setOutput(output + btnValue);
    }
  };

  return (
    <div className="container">
      <Display value={output} />
      <Buttons onButtonClick={calculate} />
    </div>
  );
}

export default App;