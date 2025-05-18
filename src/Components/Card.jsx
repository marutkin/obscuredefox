import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card as AntdCard, Typography, Form, Button, Space, Input, notification } from 'antd';
const { Meta } = AntdCard;
const now = new Date();
const today = now.getFullYear() + '-' +
  String(now.getMonth() + 1).padStart(2, '0') + '-' +
  String(now.getDate()).padStart(2, '0');

const { Text } = Typography;

// eslint-disable-next-line react/prop-types
const Card = ({ id, date, image, title, description, question, tip, code }) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`card-${id}`);
    if (saved === 'opened') setIsOpened(true);
  }, [id]);

  const handleClick = () => {
    if (today >= date) {
      setIsOpened(true);
      localStorage.setItem(`card-${id}`, 'opened');
    } else {
      notification.open({
        message: 'Секрет',
        description: `Эта карточка откроется ${new Date(date).toLocaleDateString()}`,
        placement: 'topRight',
        duration: 2,
      });
    }
  };

  const onFinish = (values) => {
    // eslint-disable-next-line react/prop-types
    if (question.includes(values.answer.toLocaleLowerCase())) {
      notification.open({
        message: 'Правильный ответ',
        description: "Скажи Диме код: " + code,
        placement: 'topRight',
        type: 'success',
        duration: 5,
      });
    } else {
      notification.open({
        message: 'Неправильный ответ',
        description: tip,
        placement: 'topRight',
        type: 'error',
        duration: 6,
      });
    }
  }

  const onFinishFailed = () => {
    notification.open({
      message: 'Ошибка',
      description: 'Пожалуйста, введи корректные данные.',
      placement: 'topRight',
      duration: 6,
    });
  }

  return (
    <motion.div
      layout
      style={{ width: "100%" }}
      className="w-64 h-80 m-4 cursor-pointer rounded-xl shadow-lg overflow-hidden border bg-white"
      onClick={handleClick}
    >
      <motion.div
        layout
        style={{ width: "100%", marginBottom: "10px" }}
        className="h-full w-full flex items-center justify-center bg-gray-200"
      >
        {isOpened ? (
          <AntdCard
            hoverable
            style={{ width: "100%" }}
            cover={<img alt={`Card ${id}`} src={image} className="w-full h-full object-cover" />}
          >
            <Meta title={title} description={description} />
            {question && <Space>
              <Form
                style={{ marginTop: "10px" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Отгадать и сказать код"
                  name="answer"
                  rules={[{ required: true, message: 'Введи хоть, что-нибудь!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label={null}>
                  <Button type="primary" htmlType="submit">
                    Принять
                  </Button>
                </Form.Item>
              </Form>
            </Space>}
          </AntdCard>
        ) : (
          <AntdCard
            hoverable
            style={{ width: '100%' }}
            title={<Button block className="text-center font-bold text-xl p-4">
              <Space>
                Подарочная карточка от <Text strong>{new Date(date).toLocaleDateString()}</Text>
              </ Space>
            </Button>}
          >
            <Meta title={"Пока секрет"} />
          </AntdCard>

        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;