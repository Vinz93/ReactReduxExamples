import React from 'react';
import './Switch.css';

const Switch = ({ on }) => {
  return(
    <label class="switch">
      <input type="checkbox" checked={on}/>
      <span class="slider round"></span>
    </label>
  );
};

export default Switch;
