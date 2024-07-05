import { Link } from 'react-router-dom';
// import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import React, { useContext } from 'react';
import './Navbar.css'
import { StoreContext } from '../utilities/StoreContex';
// const Navbar=({setPopUp})=>
//     {
//         const {cart}=useContext(StoreContext);
//         return(
//             <div className='navContainer'>
//               <Link to="/"> <img src={require("../assets/logo.png")} alt="Logoimg..." height={150} width={150}/></Link>
//                <div className='navComponents'>
//                <Link className='navLink ' to="/">HOME</Link>
//                <Link className='navLink ' to="/about">ABOUT</Link>
//                <Link className='navLink 'to="/menu">MENU</Link>
//                <Link className='navLink 'to="/contact">CONTACT</Link>
//                </div>
//                <div className='navButtons'>
//                 <div className='cartIcon'>
//                  <Link to="/cart"><img src={require("../assets/basket_icon.png")} alt="Logoimg..."/></Link>
//                  <p className='cartNumber'>{Object.keys(cart).length===0?0:Object.values(cart).reduce((a,b)=>a+b)}</p>
//                 </div>
//                 <button onClick={()=>setPopUp(true)}>Sign In</button>
//                </div>
//             </div>
//         )
//     }
//     export default Navbar;

import { useState } from "react";
import "./Navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from "react-router-dom";

const Navbar = ({setPopUp}) =>{
    const {cart}=useContext(StoreContext);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2>
                        <span>F</span>ood
                        <span>C</span>ourt
                    </h2>
                </div>
                {/* 2nd menu part  */}
                    {/* <div className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                      }> */}
                      <div className='menu-link'>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">about</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                   
                {/* 3rd social media links */}
                <div className="social-media">
                   <Link to="/cart"><img src={require("../assets/basket_icon.png")} alt="Logoimg..." /></Link> 
                    <button onClick={()=>setPopUp(true)}>Sign In</button>
                    {/*  Menu Icon start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <MenuIcon fontSize='large' />
                        </a>
                    </div>
                </div>
            </nav>
            {showMediaIcons&&<div className="mobile-menu-link">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">about</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">contact</NavLink>
                            </li>
                        </ul>
               </div>}
        </>
    );
};

export default Navbar;
