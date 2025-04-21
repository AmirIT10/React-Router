

import React, { useState } from 'react';
import './App.css';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';
import Userid from './Userid';

function App() {


  return (
   
   

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/adduser' element={<AddUser/>} >
          {/* میتونیم ی کامپوننت هم بهش بدیم وقتی که userid ف
          فراخوانی شد نمایش بده  */}
            <Route path=':userid'  element={<Userid/>} />
          </Route>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='*' element={<Home/>}/>
           
        </Routes>
      </BrowserRouter>
      
    
  );
}

export default App ;