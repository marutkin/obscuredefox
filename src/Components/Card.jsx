import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const today = new Date().toISOString().slice(0, 10); // "2025-06-11"

const Card = ({ id, date, image }) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`card-${id}`);
    if (saved === 'opened') setIsOpened(true);
  }, [id]);

  const handleClick = () => {
    if (today >= date) {
      setIsOpened(true);
      localStorage.setItem(`card-${id}`, 'opened');
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
          <img src={image} alt={`Card ${id}`} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center font-bold text-xl p-4">
            🎁 Нажми, чтобы открыть <br />
            (с {new Date(date).toLocaleDateString()})
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;