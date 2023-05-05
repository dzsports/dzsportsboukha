import { Route, Routes } from 'react-router';

import Home from './pages/Home/Home';
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'
import Interface from './pages/Interface/Interface'

import './App.css';

function App() {
  return (
      <>
        <Routes>
          <Route path='/dzsports/' element={<Home />} />
          <Route path='/dzsports/login' element={<Login />} />
          <Route path='/dzsports/signup' element={<Signup />} />
          <Route path='/dzsports/interface' element={<Interface />} />
        </Routes>
      </>
    
  );
}

export default App;
