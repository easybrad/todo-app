import { useState } from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  const [inputDate, setInputDate] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputTime, setInputTime] = useState('');
  // 监听表单项改变
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };
  const descChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDesc(event.target.value);
  };
  const timeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };
    console.log(newLog);
    /**
     * 提交表单后清空原数据
     * 目前表单是非受控组建 用户自行控制 不建议用
     *
     */
    setInputDate('');
    setInputDesc('');
    setInputTime('');
  };
  return (
    <Card className='logs-form'>
      <form onSubmit={formSubmitHandler}>
        <div className='form-item'>
          <label htmlFor='date'>日期</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate}
            type='date'
            id='date'
          />
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>内容</label>
          <input
            onChange={descChangeHandler}
            value={inputDesc}
            type='text'
            id='desc'
          />
        </div>
        <div className='form-item'>
          <label htmlFor='time'>时长</label>
          <input
            onChange={timeChangeHandler}
            value={inputTime}
            type='number'
            id='date'
          />

          {/* <input onChange={(e) => {}} type='number' id='date' /> */}
        </div>
        <div className='form-btn'>
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};
export default LogsForm;
