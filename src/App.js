import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <img
            src={'http://pngimg.com/uploads/pizza/pizza_PNG44085.png'}
            alt="new"
            width={150} height={140}
          />
          <h1>Pizzeria
          <p style={{ color: 'white' }}>We have pizzas available as shown below</p>
          </h1>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
