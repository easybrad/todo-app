import Logs from './components/Logs/Logs';
import LogsForm from './components/LogsForm/LogsForm';
import './App.css';
const App = () => {
  return (
    <div className='app'>
      <LogsForm />
      <Logs />
    </div>
  );
};

export default App;
