import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import StoreContextProvider from './utilities/StoreContex';
import SigninSignUp from './components/SignInSignUp';
import Cartpage from './components/Cartpage';
import Order from './components/Order';
function App() {
  const [popUp,setPopUp]=useState(false);
  return (
    <StoreContextProvider>
    <BrowserRouter>
    {popUp?<SigninSignUp setPopUp={setPopUp}/>:<></>}
    <div className="App">
      <Navbar setPopUp={setPopUp}/>
       <Routes>
        <Route exact path="/foodcourtapp" element={<Home/>}/>
        <Route path='/foodcourtapp/about' element={<About/>}/>
        <Route path='/foodcourtapp/menu' element={<Menu/>}/>
        <Route path='/foodcourtapp/contact' element={<Contact/>}/>
        <Route path="/foodcourtapp/cart" element={<Cartpage/>}/>
        <Route path='/foodcourtapp/order' element={<Order/>}/>
       </Routes>
       
    </div>
    </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
