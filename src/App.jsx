import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const App = () => {
  const cards = [
    { id: 1, date: '2025-05-01', image: '/images/1.png' },
    { id: 2, date: '2025-05-11', image: '/images/2.png' },
    { id: 3, date: '2025-05-15', image: '/images/3.png' },
    { id: 4, date: '2025-06-17', image: '/images/4.png' },
    { id: 5, date: '2025-06-19', image: '/images/5.png' },
  ];

  return (
    <div className="flex flex-wrap justify-center p-8 bg-sky-50 min-h-screen">
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default App;