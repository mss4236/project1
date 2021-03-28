// 고정 레이아웃
import React from 'react';

const AppLayout = () => {

    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default AppLayout;