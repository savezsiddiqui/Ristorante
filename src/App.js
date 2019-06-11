import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className="App">
        < Main />
      </div>
    );
  }
}

export default App;
