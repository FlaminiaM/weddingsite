import React from 'react';
import './TimelineSingleComponent.scss';

import Line from '../../atoms/line/Line';

function TimelineSingleComponent({icon, label, time, position, elementNumber}) {
  return (
    <div className={`timeline-single-component timeline-single-component--${position} timeline-single-component--${elementNumber}`}>
         <div className='timeline-single-component-body-left'>
            {icon}
         </div>
        <div className='timeline-single-component-body-right'>
            <span className="timeline-single-component-body-right-label ">{label.split("<br/>").join("\n")}</span>
            <span className="timeline-single-component-body-right-time ">{time}</span>
            <Line type="timeline" orientation="horizontal" />
        </div>
    </div>
  )
}

export default TimelineSingleComponent;