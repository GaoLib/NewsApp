import React , { Component } from 'react'
import { LoginHeader, BackToAccount, Form, Input,Button,ErrorMessage } from './style'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: null,
            password: null,
            errorMessage: null
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.submit = this.submit.bind(this)
    }

    render(){
        const { loginFlag } = this.props
        return (
            <div>
                <LoginHeader>
                    <NavLink to="/account">
                        <BackToAccount><i className="iconfont">&#xe609;</i></BackToAccount>
                    </NavLink>
                </LoginHeader>
                <Form>
                    <Input placeholder="请输入用户名" onBlur={ this.handleUsername }></Input>
                    <Input placeholder="请输入密码" onBlur={ this.handlePassword }></Input>
                    <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                    <Button onClick={this.submit}>
                        { loginFlag ? '更换账号' : '登录'}
                    </Button>
                </Form>
            </div>
        )
    }

    handleUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    submit(){
        const { username,password } = this.state
        if(!!username && !!password){
            this.props.login(username,password)
        } else {
            this.setState({
                errorMessage: '用户名和密码不能为空'
            })
        }
    }
}

const mapState = (state) => {
    return {
        loginFlag: state.account.loginFlag
    }
}

const mapDispatch = (dispatch) => {
    return {
        login(user,pass){
            let account = {
                user,
                pass
            }
            dispatch(actionCreators.login(account))
        }
    }
}

export default connect(mapState,mapDispatch)(Login)