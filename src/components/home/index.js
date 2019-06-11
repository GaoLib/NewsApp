import React, { Component } from 'react';
import Header from './Header'
import Footer from '../common/footer'
import Body from './Body'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            curTab:'推荐',
            tabList: ['推荐','热点','娱乐圈','笑点低','二次元','潮人范']
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
                <Header curTab={this.state.curTab} tabList={this.state.tabList} chooseTab={this.chooseTab}/>
                <Body />
                <Footer />
            </div>
        );
    }

}