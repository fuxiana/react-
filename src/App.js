import './App.css';
import 'antd/dist/antd.css'
import {  Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { HashRouter as Router, Routes,  Route, Navigate } from "react-router-dom";
import { routerList } from './router';
import {MenuList} from './layout/index.js'
const { Header, Content, Footer, Sider } = Layout;

const App= () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={MenuList} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Router>
            <Routes>
              {routerList.map((item)=>{
                return <Route  {...item} key={item.path}/>
              })}
              <Route path="*" element={<Navigate to="/404"/>}></Route>
            </Routes>
          </Router>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
