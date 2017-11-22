import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>Header should be here</header>
        {this.props.children}
        <footer>Footer should be here</footer>
      </div>
    );
  }
}
