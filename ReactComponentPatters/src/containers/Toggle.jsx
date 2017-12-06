import React, { Component } from 'react';
import Switch from '../components/Switch';
class Toggle extends Component {
  render() {
    return (
      <div>
        <Switch on={true}/>
      </div>
    );
  }
}

export default Toggle;
