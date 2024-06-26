import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './Timer.css'
export default function Timer() {
  return (
   <div class='timer'>
   <FlipClockCountdown to={'2023-09-23T12:00:00Z'} />;
    </div>
  )
}
