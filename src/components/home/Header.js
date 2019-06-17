import React, { Component } from 'react';
import { NavWrapper, NavArrow} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import $ from 'jquery'

class Header extends Component{
    
    componentDidMount(){
        $.get('http://localhost:8888/getTabList',function(data){
            console.log(data);
        })  
    }

    render(){
        const {curTab,tabList,chooseTab} = this.props
        return (
            <div>
                <div>
                    <NavWrapper>
                       { tabList.map(tab=>{
                            return <li className={curTab===tab.id ? 'nav-active' : ''} 
                            key={tab.id} 
                            onClick={()=>chooseTab(tab.id)}>{ tab.name }</li>
                        }) }
                        <NavArrow>\/</NavArrow>
                   </NavWrapper>
                </div>
            </div>
        );
    }

}

const mapState = (state)=>{
    return {
        curTab: state.home.curTab,
        tabList: state.home.tabList
    }
}

const mapDispatch = (dispatch)=>{
    return {
        chooseTab(id){
            dispatch(actionCreators.chooseTab(id))
        }
    }
}

export default connect(mapState,mapDispatch)(Header)