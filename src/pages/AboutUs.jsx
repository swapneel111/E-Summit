import React from 'react';
import './AboutUs.css';
import bridge from '../assets/bridge.png';

export default function AboutUs() {
  return (
    <div>
      <img id="bridge" src={bridge} alt="Bridge" />
      <div className="text">ABOUT US</div>

      <div className="AboutUsCard">
        <p>
          <br />
          <br />
          <b>The Institute of Engineering and Management, Kolkata, is thrilled to present E-Summit 2024, a premier event celebrating innovation, entrepreneurship, and technology! Mark your calendars for an action-packed weekend on 27-28th July 2024 at the iconic IEM Gurukul Building in Kolkata.</b>
          <br />
          <br />
          Join us for two days of inspiring talks, hands-on workshops, and unparalleled networking opportunities with industry leaders, visionaries, and fellow enthusiasts. Whether you're an aspiring entrepreneur, a tech aficionado, or simply curious about the future of innovation, E-Summit 2024 promises something for everyone!
          <br />
          <br />
          📅 Date: 27-28th July 2024
          <br />
          📍 Venue: IEM Gurukul Building, Kolkata
          <br />
          <br />
          Be part of the movement that's shaping Bengal. Don't miss this chance to connect, learn, and grow. See you at E-Summit 2024!
        </p>
      </div>
    </div>
  );
}
