import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import UserContext from './helpers/helperFunctions';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkForToken() {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    checkForToken();
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Router;
