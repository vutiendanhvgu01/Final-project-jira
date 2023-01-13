import React,{ useState }  from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { history } from '..';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


type Props = {}

const HomeTemplate:React.FC = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'User',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Search',
              onClick: () => {
               
              }
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',

            },
            
          ]}
          
        />
      </Sider>
      <Layout className="site-layout">
       
        <Sider theme='light'>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className="sub-nav-user">
            <div className="user-wrap d-flex">
              <div className="user-image-nav">
                <img src='...' alt='...'/>
              </div>
              <div className="user-info">
                <h4>CyberLearn</h4>
              </div>
            </div>
            <div className="sub-nav-project">
            <ul className='sub-nav-list-project'>
<li>Cyber Board</li>
<li>Project management</li>

<li>Create project</li>

            </ul>
            <hr/>
            </div>
            <div className="sub-nav-setting">
            <ul className='sub-nav-list-setting'>
              <li>Releases</li>
              <li>Issues and filters</li>
              <li>Pages</li>
              <li>Reports</li>
              <li>Components</li>

            </ul>
            </div>
          </div>
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          hello
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default HomeTemplate