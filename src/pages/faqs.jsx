import React from 'react';

import '../pages/faqs.css'
import pdfFile from '../assets/documents/brochure.pdf'; // 


export default function EventCard() {
    return (
      <div className="event-card">
        <h2>INFORMATION BROCHURE</h2>
        
        <iframe
          src={pdfFile}
          width="100%"
          height="500px"
          title="Event Brochure"
          style={{ border: 'none', borderRadius: '10px' }}
        ></iframe>
      </div>
    );
  }
