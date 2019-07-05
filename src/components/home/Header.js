import React, { Component } from 'react';
import { NavWrapper, NavArrow } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component{
    
    componentDidMount(){
        const { newsList, getTabList } = this.props
        if(!newsList.length){
            getTabList()
        }
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
        tabList: state.home.tabList,
        newsList: state.home.newsList
    }
}

const mapDispatch = (dispatch)=>{
    return {
        chooseTab(id){
            dispatch(actionCreators.chooseTab(id))
        },
        getTabList(){
            dispatch(actionCreators.getTabList())
        }
    }
}

export default connect(mapState,mapDispatch)(Header)