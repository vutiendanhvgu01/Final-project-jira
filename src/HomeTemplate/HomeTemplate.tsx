import React, { useState } from 'react'
import type { MenuProps, MenuTheme } from 'antd';
import { Layout, Menu, theme, Switch } from 'antd';
import { history } from '..';
import { Outlet } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined,SearchOutlined,ProjectOutlined,PlusSquareOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;



type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Project', 'project', <ProjectOutlined />, [
    getItem('View all projects', 'allProjects'),
    getItem('Create project', 'createProject'),
  ]),

  getItem('User', 'sub2', <UserOutlined />, [
    getItem('View all users', 'allUser', null),
    getItem('My account', 'profile', null),

  ]),

  getItem('Search', 'sub4', <SearchOutlined />),
  getItem('Create task', 'createTask', <PlusSquareOutlined />),

];

type Props = {}

const HomeTemplate: React.FC = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e: any) => {
    console.log('click ', e.key);
    let url:string =e.key;

    switch (url) {
      case 'profile': {
        console.log('profile')
        history.push(`/home/profile`)
        break;
      }
      case 'createTask': {
        console.log('createTask')
        history.push(`/home/createTask`)
        break;
      }

      default: {
        break;
      }
    }

    setCurrent(e.key);
  };
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh' }} theme={theme}>
          <div className="logo" />
          <div className="change-theme" style={{ marginTop: '15px' }}>
            <Switch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />

          </div>

          <Menu
            theme={theme}
            onClick={onClick}
            style={{ width: "100%" }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,

            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default HomeTemplate