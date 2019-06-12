import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import  { GlobalIconStyle } from './style'
import Account from './components/account/index';
import Home from './components/home'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/account" exact component={Account}/>
            </Switch>
        </BrowserRouter>
        <GlobalIconStyle />
    </Provider>
, document.getElementById('root'));

