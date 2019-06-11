import React, { Component } from 'react';
import { Banner } from './style'
import Banner1 from '../../images/banner.jpg'

export default class Body extends Component {
    render() {
        return (
            <Banner style={{background: Banner1}}>
                <div className="turn">
                    <div className="turnBanner banner-active"></div>
                    <div className="turnBanner"></div>
                    <div className="turnBanner"></div>
                    <div className="turnBanner"></div>
                </div>
            </Banner>
        );
    }
}