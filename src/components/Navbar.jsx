
import React,{useState} from "react";
import {Link } from "react-router-dom";
import './Navbar.css'
import home from '../assets/icon/home.jpg'
import team from '../assets/icon/team.jpg'
import gallery from '../assets/icon/gallery.jpg'
import timeline from '../assets/icon/timeline.jpeg'
import { useRef } from "react";
import { useEffect } from "react";
import prize from "../assets/icon/prize.jpg"

function Navbar(){
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [show,setShow]=useState(true)
  const controlNavbar=()=>{
    if (window.scrollY>windowSize.current[1]){
      setShow(false)
      console.log(windowSize.current[0])
    }
    else{
      setShow(true)
      console.log(windowSize.current[0])
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",controlNavbar)
  
    return () => {
      window.removeEventListener('scroll',controlNavbar)
    }
  }, [])
  
  return (
        <nav id={`${show && 'nav1'}`}>
        <ul>
        <li>
        <Link to="/"><div id='navbar_tray'>Home<img id='navbar_icon'src={home} alt=""/></div></Link>
        </li>
        <li>
        <Link to="/Prizes"><div id='navbar_tray'>Prize<img id='navbar_icon' src={prize} alt=""/></div></Link>
        </li>
        <li>
        <Link to='/Timeline'><div id='navbar_tray'>Timeline<img id='navbar_icon' src={timeline} alt=""/></div></Link>
        </li>
        <li>
        <Link to="/Team"><div id='navbar_tray'>Team<img id='navbar_icon' src={team} alt=""/></div></Link>
        </li>
        <li>
        <Link to='/Gallery'><div id='navbar_tray'>Gallery<img id='navbar_icon' src={gallery} alt=""/></div></Link>
        </li>
        </ul>
    </nav>
    );
}

export default Navbar;