import React, { Component } from 'react';
import './App.css';
import WeatherApp from './weatherApp/weatherApp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>
    );
  }
}

export default App;
