import React, { Component } from 'react';
import { NavWrapper, NavArrow} from './style'

export default class Header extends Component{
  
    render(){
        const {curTab,tabList,chooseTab} = this.props
        return (
            <div>
                <div>
                    <NavArrow>\/</NavArrow>
                    <NavWrapper onClick={chooseTab}>
                       { tabList.map(tab=>{
                            return <li className={curTab===tab ? 'nav-active' : ''}>{ tab }</li>
                        }) }
                   </NavWrapper>
                </div>
            </div>
        );
    }

}