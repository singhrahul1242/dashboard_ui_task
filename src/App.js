import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="dasboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
