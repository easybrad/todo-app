// Logs.tsx
import React from 'react';
import './Logs.css';
import Card from '../UI/Card/Card'; // 引入 Card 组件
import LogItem from './LogItem';

const Logs: React.FC = () => {
  const logsData = [
    {
      id: '001',
      date: new Date(2022, 10, 20, 19, 30),
      desc: '学习前端1',
      time: '10',
    },
    {
      id: '002',
      date: new Date(2022, 11, 10, 20, 35),
      desc: '学习前端2',
      time: '20',
    },
    {
      id: '003',
      date: new Date(2023, 6, 1, 9, 20),
      desc: '学习前端3',
      time: '30',
    },
  ];
  const logItemData = logsData.map((item) => (
    <LogItem key={item.id} {...item} />
  ));

  return <Card className='logs'>{logItemData}</Card>;
};

export default Logs;
