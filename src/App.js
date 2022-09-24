import './App.css';
import 'antd/dist/antd.css'
import {  Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,  Route, Navigate, Link } from "react-router-dom";
import { routerList } from './router';
import {MenuList} from './layout/index.js'
const { Header, Content, Footer, Sider } = Layout;


const App= () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" >
            {MenuList.map((item)=>{
              if(item.children){
                item.children.map((items)=>{
                  return <Menu.Item {...items}><Link to={items.key}>{items.label}</Link></Menu.Item>
                })
              }else{
                return <Menu.Item {...item}><Link to={item.key}>{item.label}</Link></Menu.Item>
              }
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
              <Routes>
                {routerList.map((item)=>{
                  return <Route  {...item} key={item.path}/>
                })}
                <Route path="*" element={<Navigate to="/404"/>}></Route>
              </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          
          </Footer>
        </Layout>
      </Layout>
    </Router>

  );
};

export default App;
