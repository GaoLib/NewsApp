import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Home from './Home';
import Article from './Article';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/article" component={Article}/>
            </div>
        );
    }
}

