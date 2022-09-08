import React from 'react';
import './TimelineComponent.scss';

import SingleTimelineComponent from '../../molecules/timelineSingleComponent/TimelineSingleComponent';
import Image from '../../atoms/image/Image';
import Line from '../../atoms/line/Line';

function TimelineComponent() {
  return (
    <div className="timeline-component">
      <SingleTimelineComponent 
        icon = {<Image name="church" type="png" size="medium"/>}
        label="Wedding Ceremony"
        time="4:00pm"
        position = "left"
        elementNumber={1}
      />
      <SingleTimelineComponent 
        icon = {<Image name="camera" type="png" size="medium"/>}
        label="Photos"
        time="5:00pm"
        position = "right"
        elementNumber={2}
      />
      <SingleTimelineComponent 
        icon = {<Image name="cocktail" type="png" size="medium"/>}
        label="Cocktail"
        time="6:00pm"
        position = "left"
        elementNumber={3}
      />
      <SingleTimelineComponent 
        icon = {<Image name="dinner" type="png" size="medium"/>}
        label="Dinner"
        time="8:00pm"
        position = "right"
        elementNumber={4}
      />
      <SingleTimelineComponent 
        icon = {<Image name="party" type="png" size="medium"/>}
        label="Party - Open bar"
        time="10:00pm"
        position = "left"
        elementNumber={5}
      />
      <Line type="timeline" orientation="vertical" />
    </div>
  )
}

export default TimelineComponent;