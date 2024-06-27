import React from 'react'
import bridge from '../assets/bridge.png'
import './Prizes.css'
import first from '../assets/prizes/1st.png'
import second from '../assets/prizes/2nd.png'
import third from '../assets/prizes/3rd.png'
export default function Prizes() {
  return (
    <div>
      <img id="bridge" src={bridge} alt="iimg" />


      <div class="text">PRIZES</div>
      <div class="prizes">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="img1" src={second} alt="Avatar" />
            </div>
            <div class="flip-card-back">
              <h1 class="p2">2nd</h1>
              <p>Will be revealed</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="img1" src={first} alt="Avatar" />
            </div>
            <div class="flip-card-back">
              <h1 class="p1">1st</h1>
              <p>Will be revealed</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="img1" src={third} alt="Avatar" />
            </div>
            <div class="flip-card-back">
              <h1 class="p3">3rd</h1>
              <p>Will be revealed</p>
            </div>
          </div>
        </div>

      </div>
      <div class="text">COMPETITIONS</div>
      <br />

      <br />
      <br />
      <br />
      <section class="tracks_container">

        <div class="Solana_track">
          <div>

          </div>
        </div>
        <div class="Filecoin_track">

        </div>
        <div class="Polygon_track">

        </div>
        <div class="Replit_track">

        </div>
      </section>
    </div>
  )
}
