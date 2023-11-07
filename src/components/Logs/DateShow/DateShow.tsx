import React from 'react';
import './DateShow.css';

// 定义组件的 Props 类型
interface DateShowProps {
  date: Date;
}

const DateShow: React.FC<DateShowProps> = ({ date }) => {
  const month = date.toLocaleString('zh-CN', { month: 'long' });
  const day = date.getDate();

  return (
    <div className='date'>
      <div className='month'>{month}</div>
      <div className='day'>{day}</div>
    </div>
  );
};

export default DateShow;
