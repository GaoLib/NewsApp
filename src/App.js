import React, { Component } from 'react';
import Main from './components/Main';
import Account from'./images/account.svg';
import HomePage from './images/home-active.svg';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Main/>
            <div className="footer">
                <NavLink to="/"><img src={HomePage} className="icon" alt="Home"/></NavLink>
                <NavLink to="/account"><img src={Account} className="icon" alt="Account"/></NavLink>
            </div>
        </div>
    );
  }
}

export default App;
