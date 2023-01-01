import React, { useState } from 'react';
import './index.css';

const App = () => {

  const [temp, setTemp] = useState(10)
  const [color, setColor] = useState('cold')
  
  const increaseTemp = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;

    if (newTemp>=15) {
      setColor('hot')
    }
    setTemp(newTemp);
  }

  const decreaseTemp = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;

    if (newTemp<15) {
      setColor('cold')
    }
    setTemp(newTemp)
  }

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${color}`}>{temp}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={()=>increaseTemp()}>+</button>
        <button onClick={()=>decreaseTemp()}>-</button>
      </div>
    </div>
  );
}

export default App;
