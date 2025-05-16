import React from 'react';
import Card from './Components/Card';
import { Flex, Space, Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'

const headerStyle = {
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    marginBottom: 16,
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
};
const footerStyle = {
    textAlign: 'center',
};
const layoutStyle = {
    height: '98vh',
    borderRadius: 8,
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

const App = () => {
    const cards = [
        { id: 1, date: '2025-05-01', image: img1, title: 'Card 1', description: 'Description for card 1' },
        { id: 2, date: '2025-05-11', image: img2, title: 'Card 2', description: 'Description for card 2' },
        { id: 3, date: '2025-05-15', image: img3, title: 'Card 3', description: 'Description for card 3' },
        { id: 4, date: '2025-06-17', image: img4, title: 'Card 4', description: 'Description for card 4' },
        { id: 5, date: '2025-06-19', image: img5, title: 'Card 5', description: 'Description for card 5' },
    ];


    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>
                    <Space wrap>
                        {cards.map(card => (
                            <Card key={card.id} {...card} />
                        ))}
                    </Space>
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Flex>
    )
};

export default App;