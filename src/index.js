import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import  { GlobalStyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'
import Account from './components/account/index';
import Home from './components/home'
import Detail from './components/home/Detail'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/account" exact component={Account}/>
                <Route path="/detail" exact component={Detail} />
            </Switch>
        </BrowserRouter>
        <GlobalStyle />
        <GlobalIconStyle />
    </Provider>
, document.getElementById('root'));

