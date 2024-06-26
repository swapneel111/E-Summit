import bganmation from './assets/bganmation.mp4'
import {useParallax} from 'react-scroll-parallax'
import React,{useRef} from 'react';
import './App.css'
import { Helmet } from 'react-helmet';
import logo from './assets/logo.png'
import Home from './pages/Home';
import { PushSpinner } from "react-spinners-kit";

function App() {
  return (
    <div class='main'>
      <PushSpinner></PushSpinner>
      <Helmet>
        <title>Bengal-E-Summit</title>
      </Helmet>
      <Home/>
    </div>
  );
}

export default App;
