import React ,{Component} from "react";
//登陆路由
import {NavBar,List,WingBlank,InputItem,Button} from 'antd-mobile'
import Logo from '../../components/logo'

export default class Register extends Component{
    state ={
        username :'',
        password:'',
    }
// 跳转到注册
    toRegister = () => {
        this.props.history.replace('/register')
    }
    //请求登录
    Login=()=>{
        console.log(this.state)
    }

    handleChange=(name,val)=>{
        this.setState({
            [name] : val
        })
    }
    render(){
        return (
            <div>
                <NavBar>用户登录</NavBar>
                <WingBlank/>
                <WingBlank/>
                <Logo/>
                <WingBlank>
                    <List>
                        <WingBlank/>
                        <WingBlank/>
                        <InputItem type='text' placeholder='请输入用户名'
                                   onChange={(val)=>this.handleChange('username',val)}>用户名</InputItem>
                        <InputItem type='text' placeholder='请输入密码'
                                   onChange={(val)=>this.handleChange('password',val)}>密码</InputItem>
                        <WingBlank/>
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <WingBlank/>
                        <Button onClick={this.toRegister}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>

        )}
}