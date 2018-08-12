import React, {Component} from "react";
import {NavBar,List,WingBlank,InputItem,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo'



//注册路由
export default class Register extends Component{
    state ={
        username :'',
        password:'',
        password2:'',
        type:'dashen'//dashen,
    }

    toLogin = () => {
        this.props.history.replace('/login')
    }
    register=()=>{
        console.log(this.state)
    }
    handleChange=(name,val)=>{
        this.setState({
            [name] : val
        })
    }
    render(){
        const {type}= this.state
        return (
            <div>
             <NavBar>用户注册</NavBar>
                <WingBlank/>
                <WingBlank/>
             <Logo/>
             <WingBlank>
                 <List>
                     <WingBlank/>
                     <WingBlank/>
                     <InputItem type='text' placeholder='请输入用户名'
                                onChange={(val)=>this.handleChange('username',val)}>用户名</InputItem>
                     <WingBlank/>
                     <InputItem type='password' placeholder='请输入密码'
                                onChange={(val)=>this.handleChange('password',val)}>密码</InputItem>
                     <WingBlank/>
                     <InputItem type='password' placeholder='请输入确认密码'
                                onChange={(val)=>this.handleChange('password2',val)}>确认密码</InputItem>
                     <WingBlank/>
                     <List.Item>
                     <span>用户类型 ：</span>&nbsp;&nbsp;
                     <Radio checked={type==='laoban'} onChange={() =>{this.handleChange('type','laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                     <Radio checked={type==='dashen'} onChange={() =>{this.handleChange('type','dashen')}}>大神</Radio>&nbsp;&nbsp;
                     </List.Item>
                     <WingBlank/>
                     <WingBlank/>
                     <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
                     <WingBlank/>
                     <Button onClick={this.toLogin}>已有账户</Button>
                 </List>
             </WingBlank>
            </div>

        )}
}