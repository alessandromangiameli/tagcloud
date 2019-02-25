import React, { Component } from 'react';
import Form from './app/Form';
import TagCloud from './app/TagCloud';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TagCloud />
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
