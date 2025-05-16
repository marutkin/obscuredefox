import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'

const App = () => {
  const cards = [
    { id: 1, date: '2025-05-01', image: img1 },
    { id: 2, date: '2025-05-11', image: img2 },
    { id: 3, date: '2025-05-15', image: img3 },
    { id: 4, date: '2025-06-17', image: img4 },
    { id: 5, date: '2025-06-19', image: img5 },
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