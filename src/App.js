import React, { Component } from 'react';
import { Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import Home from './components/Home';
import Article from './components/Article';

class App extends Component {
  render() {
    return (
        <div>
            <Route path="/" exact component={Home}/>
            <Switch>
            <Route path="/article:id" component={Article}/>
            </Switch>
        </div>
    );
  }
}

export default App;
