import React from 'react';

import './App.css';
import AdminDashboard from './Pages/AdminDashboard';
import LandingPage from './Pages/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import EditContent from './Component/EditContent';
import EditDetails from './Component/EditDetails';
import EditHeroPage from './Component/EditHeroPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/signIn' element={<SignIn/>}></Route>
      <Route path='/admin' element={<AdminDashboard/>}></Route>
      <Route path='/editContent' element={<EditContent/>}></Route>
      <Route path='/editDetails' element={<EditDetails/>}></Route>
      <Route path='/editHeroPage' element={<EditHeroPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
