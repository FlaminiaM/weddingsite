import React from 'react';
import './TimelineComponent.scss';

import SingleTimelineComponent from '../../molecules/timelineSingleComponent/TimelineSingleComponent';
import Image from '../../atoms/image/Image';
import Line from '../../atoms/line/Line';

function TimelineComponent({content}) {
  
  return (
    <div className="timeline-component">
      {content.map((el, i) => <SingleTimelineComponent 
        icon = {<Image name={el.icon} type="png" size="medium"/>}
        label= {el.label}
        time={el.time}
        position = {el.position}
        elementNumber={i + 1}
        key={i}
      />)}
      <Line type="timeline" orientation="vertical" />
    </div>
  )
}

export default TimelineComponent;