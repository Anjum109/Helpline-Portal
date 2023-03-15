import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/auth/Login';
import HelplinePortal from './components/HelplinePortal';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      {
        user ? <HelplinePortal /> : <Login />
      }
      {/* <HelplinePortal /> */}
    </div>
  );
}

export default App;
