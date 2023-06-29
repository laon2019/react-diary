import {useState, useEffect} from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/product/:id' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
