import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './css/index.css';
import App from './App';
import Account from './components/Account';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<BrowserRouter>
    <Switch>
    <Route path="/" exact component={App}/>
        <Route path="/account" exact component={Account}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
