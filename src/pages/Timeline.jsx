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
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '14px solid  #0000ff' }}
           date="8:00 AM"
           iconStyle={{ background: '#0000ff', color: '#ffffff' }}
           icon={<img src={checkin} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Event Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="9:00 AM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={checkin} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Registrations Start</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '14px solid  #0000fF' }}
           date="9:30 AM"
           iconStyle={{ background: '#0000fF', color: '#ffffff' }}
           icon={<img src={inaug} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Inaguration</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="10:00 AM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={hack} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Start-Up Expo Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="1:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Lunch</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="2:30 PM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Quiz Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="4:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Workshop Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="6:00 PM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Keynote Session Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="2:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Content Creator Enclave Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="4:00 PM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Investopia starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="12:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={workshop} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Workshop</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="3:00 AM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={minievent} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title"> Event</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="8:00 AM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Registration ends</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="12:00 AM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={dead} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Lunch Break</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="12:30 AM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={dead} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">E-Summit starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="1:00 PM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={lunch} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">E-Summit starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="1:30 AM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={judge} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Judging Starts</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="3:00 PM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={judge} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Judging Ends</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="3:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={closing} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="3:30 PM"
           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           icon={<img src={minievent} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Prize Distribution</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: '#0000ff', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  #0000ff' }}
           date="4:00 PM"
           iconStyle={{ background: '#0000ff', color: '#fff' }}
           icon={<img src={checkin} style={{height:'100%',width:'100%'}} alt=""/>}
          >
          <h3 className="vertical-timeline-element-title">Event end</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
   </div>

    
  )
}
