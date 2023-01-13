import React from "react";
import { Layout } from "antd";
import {UserOutlined,LockOutlined, FacebookOutlined, TwitterOutlined} from '@ant-design/icons'
import Input from "antd/es/input/Input";
import {Button} from "antd";
import { history } from "../..";
const { Header, Footer, Sider, Content } = Layout;
type Props = {};

const Login = (props: Props) => {

  const handleLogin = () => {
    history.push('/home')
  }

  return (
    <>
      <Layout>
        
        <Sider style={{ height: window.innerHeight, backgroundImage: 'url(https://picsum.photos/500)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',   }} width={window.innerWidth/1.5}></Sider>
        <Content>
          <form className="container d-flex justify-content-center align-items-center" style={{flexDirection:'column', paddingTop: '200px'}}>
            <h3>Login</h3>
            <div className="form-group">
              <p>User name</p>
             <Input name="email" size="large" prefix={<UserOutlined/>} placeholder="email" />
            </div>
            <div className="form-group">
              <p>Password</p>
              <Input name="password" size="large" prefix={<LockOutlined/>} placeholder="password"/>
            </div>
            
            <div className="form-group">
              <Button size="large" className="mt-5" style={{backgroundColor:'rgb(102,117,223'}} onClick={() => {
                handleLogin()
              }}>Login</Button>
            </div>
            <div className="socail mt-3 d-flex">
                <Button shape="circle" className="font-weight-bold" style={{backgroundColor:'rgb(59,89,152',color:'black'}} icon={<FacebookOutlined/>} size="large"></Button>
                <Button type="primary" className="ms-3 font-weight-bold" shape="circle" icon={<TwitterOutlined/>} size="large"></Button>
                
            </div>
          </form>
        </Content>
        
      </Layout>
    </>
  );
};

export default Login;
