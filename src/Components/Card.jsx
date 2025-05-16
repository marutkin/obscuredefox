import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card as AntdCard, Button, Space, notification } from 'antd';
const { Meta } = AntdCard;
const today = new Date().toISOString().slice(0, 10); // "2025-06-11"

// eslint-disable-next-line react/prop-types
const Card = ({ id, date, image, title, description }) => {
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

  return (
    <motion.div
      layout
      className="w-64 h-80 m-4 cursor-pointer rounded-xl shadow-lg overflow-hidden border bg-white"
      onClick={handleClick}
    >
      <motion.div
        layout
        className="h-full w-full flex items-center justify-center bg-gray-200"
      >
        {isOpened ? (
          <AntdCard
            hoverable
            style={{ width: 240 }}
            cover={<img alt={`Card ${id}`} src={image} className="w-full h-full object-cover" />}
          >
            <Meta title={title} description={description} />
          </AntdCard>
        ) : (
          <AntdCard
            hoverable
            style={{ width: '350px' }}
            title={<Button className="text-center font-bold text-xl p-4">
              <Space>
                popai
                ({new Date(date).toLocaleDateString()})
              </ Space>
            </Button>}
          >
            <Meta title={title} description={description} />
          </AntdCard>

        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;