import Card from '../UI/Card/Card';
import DateShow from './DateShow/DateShow';
import './LogItem.css';

// Define the props interface
interface LogItemProps {
  date: Date;
  desc: string;
  time: string;
}

const LogItem = ({ date, desc, time }: LogItemProps) => {
  return (
    <>
      {/* Log item container */}
      <Card className='item'>
        <DateShow date={date} />
        <div className='content'>
          <h2 className='desc'>{desc}</h2>
          <div className='time'>{time}</div>
        </div>
      </Card>
    </>
  );
};

export default LogItem;
