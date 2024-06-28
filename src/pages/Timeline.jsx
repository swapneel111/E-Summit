import React from 'react'
import bridge from '../assets/bridge.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import lunch from "../assets/icon/lunch.png" 
import checkin from "../assets/icon/checkin.png"
import inaug from '../assets/icon/inauguration.png'
import hack from '../assets/icon/hacking.png'
import workshop from '../assets/icon/workshop.png'
import minievent from "../assets/icon/minievent.png"
import dead from '../assets/icon/deadline.png'
import judge from '../assets/icon/judge.png'
import closing from '../assets/icon/closing.png'

export default function 
() {
  return (
    <div>
       <img id="bridge" src={bridge} alt=""/>
       <div class="text">TIMELINE</div>
        <VerticalTimeline>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '14px solid  #0000ff' }}
           date="8:00 AM"
           iconStyle={{ background: '#ffa07a', color: '#ffffff' }}
           icon={<img src={checkin} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Event Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="9:00 AM"
           iconStyle={{ background: '#fff', color: '#ffa07a' }}
           icon={<img src={checkin} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Registration Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="9:30 AM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={inaug} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Inaguration</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="10:00 AM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={hack} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Start-Up Expo Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="1:00 PM"
           iconStyle={{ background: '#fff', color: '#ffa07a' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Lunch</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="2:30 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Conference Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="4:00 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Keynote session Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="6:00 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Keynote Session Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="2:00 PM"
           iconStyle={{ background: '#fff', color: '#ffa07a' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Content Creator Enclave Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="4:00 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Dinner</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="12:00 PM"
           iconStyle={{ background: '#fff', color: '#ffa07a' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Workshop</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="3:00 AM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={minievent} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Reveal soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="8:00 AM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Reveal soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="12:00 AM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={dead} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="12:30 AM"
           iconStyle={{ background: '#fff', color: '#ffa07a' }}
           icon={<img src={dead} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="1:00 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="1:30 AM"
           iconStyle={{ background: '#fff', color: '#ffa07a' }}
           icon={<img src={judge} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="3:00 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={judge} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '#ffa07a' }}
           date="3:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={closing} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#ffa07a', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="3:30 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={minievent} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Revealing soon</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#fff', color: '#ffa07a' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="4:00 PM"
           iconStyle={{ background: '#ffa07a', color: '#fff' }}
           icon={<img src={checkin} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Checkout</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
   </div>

    
  )
}
