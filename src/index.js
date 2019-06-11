import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import  { GlobalIconStyle } from './style'
import Account from './components/account/index';
import Home from './components/home'

ReactDOM.render(<BrowserRouter>
    <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/account" exact component={Account}/>
        </Switch>
        <GlobalIconStyle />
    </div>
</BrowserRouter>, document.getElementById('root'));

