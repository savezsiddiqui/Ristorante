import React, { Component } from 'react';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { HashRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore';
import { Provider } from 'react-redux';
import './App.css';

const store = ConfigureStore();

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES
    }
  }

  render() {

    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            < Main />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
