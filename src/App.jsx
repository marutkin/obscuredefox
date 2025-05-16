import React from 'react';
import Card from './Components/Card';
import CountdownToJune19 from './Components/CountdownToJune19';
import BirthdayAgreement from './Components/BirthdayAgreement';
import HeaderActions from './Components/HeaderActions';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

import img1 from './assets/p1.jpg'
import img2 from './assets/p2.jpg'
import img3 from './assets/p3.jpg'
import img4 from './assets/p4.jpg'
import img5 from './assets/p5.jpg'

const headerStyle = {
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    marginBottom: 16,
    backgroundColor: '#87e8de47',
    borderRadius: 8,
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#f6ffed',
};
const footerStyle = {
    width: '100%',
    padding: 5
};
const layoutStyle = {
    backgroundColor: '#f6ffed',
    minHeight: '98vh',
    borderRadius: 8,
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

const cards = [
    { id: 1, date: '2025-05-12', image: img1, title: 'Искать', description: 'Где-то на балконе?' },
    { id: 2, date: '2025-05-13', image: img2, title: 'Искать', description: 'Мам я хочу BMW! У нас уже есть BMW дома!' },
    { id: 3, date: '2025-05-14', image: img3, title: 'Отгадать', description: 'Где это я?', question: ["lisovic", "lisović"], tip: "Этот населенный пункт не далеко от Белграда!", code: "Ну ты придумал, пиздец =)" },
    { id: 4, date: '2025-05-15', image: img4, title: 'Подумоть', description: 'Возможно Плюша поможет?', question: ["42"], tip: "Это не ответ на вопрос, а ответ на вопрос жизни, вселенной и всего такого. Короче, число!", code: "Ступор мозговины" },
    { id: 5, date: '2025-05-16', image: img5, title: 'Вопрос со звездочкой!!!', description: 'Сколько Даше сегодня годиков?!', question: ["30"], code: "С днем рождения, любимая Дашуля!!!" },
];

const App = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}><HeaderActions /></Header>
            <Content style={contentStyle}>
                <BirthdayAgreement />
                {cards.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </Content>
            <Footer style={footerStyle}>
                <CountdownToJune19 />
            </Footer>
        </Layout>
    )
};

export default App;