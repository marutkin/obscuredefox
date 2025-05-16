import React from 'react';
import Card from './Components/Card';
import { Flex, Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

const App = () => {
    const cards = [
        { id: 1, date: '2025-05-01', image: img1 },
        { id: 2, date: '2025-05-11', image: img2 },
        { id: 3, date: '2025-05-15', image: img3 },
        { id: 4, date: '2025-06-17', image: img4 },
        { id: 5, date: '2025-06-19', image: img5 },
    ];


    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>
                    <div className="flex flex-wrap justify-center p-8 bg-sky-50 min-h-screen">
                        {cards.map(card => (
                            <Card key={card.id} {...card} />
                        ))}
                    </div>
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Flex>
    )
};

export default App;