import React from 'react'
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderView from '../components/header/Header';

const { Header, Content } = Layout;

const DashboardLayout = (props) => {
    return (
        <Layout >
            <Sidebar history={props.history} />
            <Layout >
                <Header className="site-layout-sub-header-background" style={{ background: 'white', padding: 0 }} >
                    <HeaderView/>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ background: 'white', padding: 24, overflowY: 'auto', maxHeight: '80vh' }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;