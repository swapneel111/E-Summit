// import React, { Component,useEffect } from 'react'
import React from 'react'
import './Home.css'
import bganmation from '../assets/bganimation.mp4'
import bridge from '../assets/bridge.png'
import devfolio from '../assets/sponsors/Devfolio_Logo-White.png'
import polygon from '../assets/sponsors/Polygon_Logo-White@2x.png'
import filecoin from '../assets/sponsors/Filecoin Coloured White Text-1.png'
import replit from '../assets/sponsors/Replit-Dark-Background.png'
import solana from '../assets/sponsors/Solana-Colored.png'
import AboutUs from './AboutUs'
import {Helmet} from "react-helmet";
import streamlit from '../assets/sponsors/streamlit-logo-secondary-colormark-lighttext.png'
import lumoslab from '../assets/sponsors/lumoslab.png'
import echo3d from '../assets/sponsors/echo3D - Logo 2021.png'
import wolfram from '../assets/sponsors/wolfram.png'
import aiml from '../assets/logos/ai.png'
import apd from '../assets/team/spectralogo.jpg'
import ar from '../assets/logos/ar.png'
import cloud from '../assets/logos/cloud.jpg'
import web3 from '../assets/logos/web3.png'
import webdev from '../assets/logos/web dev.png'
import quine from '../assets/sponsors/Quine.svg'
import Faqs from './faqs'
import bgimg from '../assets/background/bg.png'

export default function Home
() {
  return (
    
    <div>
      <Helmet>
      <script defer async src="https://docs.google.com/forms/d/1XbC47b8Be39CNYPusKcHVZOr6M02mT_2oLQERUG2jYU/edit"></script>
      </Helmet> 
       <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'></link>  
          <div id="main">
        <img id='bgimg' src={bgimg}></img>
        <video id="video" src={bganmation} autoPlay loop muted/>
        
        <div 
	class="apply-button" 
	data-hackathon-slug={"Bengal-E-Summit"} 
	data-button-theme={"light"}
	style={{height: '44px',width: '312px'}}
></div>     
        </div>
        <img id="bridge" src={bridge} alt=""/>
    <AboutUs></AboutUs>    
    <div id="divback">
    <div class="text-heading">OUR SPONSORS</div>

    <br/>
    <div class="text">TITLE</div>

    <h3 class="break-text">-- // &nbsp; Will be added later &nbsp; \\ -- </h3> 
    
    <br/>

    <div class="text">PLATINUM</div>

    <h3 class="break-text">-- // &nbsp; Will be added later &nbsp; \\ -- </h3> 
    <br/>

    <div class="text">GOLD</div>
    <div class="GoldSponsor">
    <div class="SponsorContainer">
      <a href="https://devfolio.co/">
        <img id="sponsorpic" src={devfolio} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://polygon.technology/">
        <img id="sponsorpic" src={polygon} alt=""/>
      </a>
    </div>
    </div>
    <div class="text">SILVER</div>
    <div class="GoldSponsor">
    <div class="SponsorContainer">
      <a href="https://replit.com/">
        <img id="sponsorpic" src={replit} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://quine.sh/?utm_source=sytronix">
        <img id="sponsorpic" src={quine} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://solana.com/">
        <img id="sponsorpic" src={solana} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://filecoin.io/">
        <img id="sponsorpic" src={filecoin} alt=""/>
      </a>
    </div> 
    </div>
    <div class="text">BRONZE</div>

    <h3 class="break-text">-- // &nbsp; Will be added later &nbsp; \\ -- </h3> 

    <br/>
    <div class="text"></div>
    <div class="GoldSponsor">
    <div class="SponsorContainer">
      <a href="https://streamlit.io/">
        <img id="sponsorpic" src={streamlit} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://www.lumoslabs.co/">
        <img id="sponsorpic" src={lumoslab} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://www.echo3d.com/">
        <img id="sponsorpic" src={echo3d} alt=""/>
      </a>
    </div>
    <div class="SponsorContainer">
      <a href="https://www.wolframalpha.com/">
        <img id="sponsorpic" src={wolfram} alt=""/>
      </a>
    </div>
     
    </div>
    </div>
    <br/><br/>
      <div class="text">PARTNERS</div>

  <div class="card">
    <div class="wrapper">
      <img src={aiml} alt="iimg" class="cover-image" />
    </div>
    <img src={aiml} alt="iimg" class="character" />
  </div>


  <div class="card">
    <div class="wrapper">
      <img src={apd} alt="iimg" class="cover-image" />
    </div>
    <img src={apd} class="character" alt=""/>
  </div>


  <div class="card">
    <div class="wrapper">
      <img src={ar}  alt="iimg" class="cover-image" />
    </div>
    <img src={ar} class="character" alt=""/>
  </div>
  <div class="card">
    <div class="wrapper">
      <img src={cloud} class="cover-image" alt="" />
    </div>
    <img src={cloud} class="character" alt="" />
  </div>
  <div class="card">
    <div class="wrapper">
      <img src={web3} class="cover-image" alt="" />
    </div>
    <img src={web3} class="character" alt=""/>
  </div>
  <div class="card">
    <div class="wrapper">
      <img src={webdev} class="cover-image" alt=""/>
    </div>
    <img src={webdev} class="character" alt=""/>
  </div>

    <div class="text">REACH US</div>
    <div id='reachus'>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1255138030992!2d88.43277047122935!3d22.574408499928637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1681554005746!5m2!1sen!2sin" width={100} title="Google Maps Embed" ></iframe>
    </div>

    <img id="bridge" src={bridge} alt=""/>
    <div class="text">FAQs</div>
    <div id='FAQs'>
    <Faqs></Faqs>
    </div>
  
    

    <div class='contact_input'>
    </div>
    <div>
    </div>
  </div>
      
 
  )
}
