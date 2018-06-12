import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import '../css/home.css';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            curTab:'推荐'
        };
        this.chooseTab = this.chooseTab.bind(this);
    }
    chooseTab(e){
        this.setState({
            curTab: e.target.innerHTML
        });
    }
    render(){
        return (
            <div>
                <div>
                    <div className="arrow-down">\/</div>
                   <ul className="nav" onClick={this.chooseTab}>
                       <li className={this.state.curTab==='推荐' ? 'nav-active' : ''}>推荐</li>
                       <li className={this.state.curTab==='热点' ? 'nav-active' : ''}>热点</li>
                       <li className={this.state.curTab==='娱乐圈' ? 'nav-active' : ''}>娱乐圈</li>
                       <li className={this.state.curTab==='笑点低' ? 'nav-active' : ''}>笑点低</li>
                       <li className={this.state.curTab==='二次元' ? 'nav-active' : ''}>二次元</li>
                       <li className={this.state.curTab==='潮人范' ? 'nav-active' : ''}>潮人范</li>
                   </ul>
                </div>
                <div className="banner">
                    <div className="turn">
                        <div className="turnBanner banner-active"></div>
                        <div className="turnBanner"></div>
                        <div className="turnBanner"></div>
                        <div className="turnBanner"></div>
                    </div>
                </div>

            </div>
        );
    }

}