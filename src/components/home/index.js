import React, { Component } from 'react';
import Header from './Header'
import Footer from '../common/footer'
import Body from './Body'
import { ContentWrapper } from './style'

export default class Home extends Component{
   
    render(){
        return (
            <ContentWrapper>
                <Header/>
                <Body />
                <Footer />
            </ContentWrapper>
        );
    }

}


