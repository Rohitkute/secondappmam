import React, { useState } from 'react';
import './App.css';
import RegisterComp from './components/RegisterComp';
import LoginComp from './components/LoginComp';
import {Link, Routes, Route } from 'react-router-dom'
import HomeComp from './components/HomeComp';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [isVisible, SetIsVisible] = useState(true);
  const setVisibility=()=> {
    SetIsVisible(false);
  }

   const mystate = useSelector(state=> state.logged)

  return (
    <div className="App">

      {isVisible && <LoginComp/>}
      {!isVisible && <Logout/>}


      {/* Hello */}


      <div style
      ={{display: mystate.loggedIn?"none":"block"}}>
      <ul className="nav navbar">
            <li className="nav-item">
                <Link to="/register" className="nav-link">REGISTER</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">LOGIN</Link>
            </li>
      </ul>
      </div>


      {/* Hello */}

      <Routes>
        <Route path='/' element={<RegisterComp/>}/>
        <Route path="/register" element={<RegisterComp/>}  />
        <Route path="/login" element={<Login setVisibility={setVisibility}/>}  />
        <Route path="/home" element={ <HomeComp/> } >
            <Route path="logout" element={ <LogoutComp /> } />
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
