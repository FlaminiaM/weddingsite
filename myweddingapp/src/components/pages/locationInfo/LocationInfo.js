import React from 'react';
import './LocationInfo.scss';

import Line from '../../atoms/line/Line';

import { sideDrawersData } from '../../../data/sideDrawersData';


function LocationInfo({locationType}) {
  return (
    <div className='location-info'>
        {sideDrawersData[locationType].title}
        <div>
          <div className='location-info-address-wrapper'>
            <div className='location-info-address txt-center mt-xl mb-xl'>
                <h2>{sideDrawersData[locationType].address.name}</h2>
                {sideDrawersData[locationType].address.address}
            </div>
            <div id="location-info-address-map">{sideDrawersData[locationType].address.map}</div>
            <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
          </div>

          <div className='location-info-directions-wrapper'>
            <h2 className='location-info-directions-title mt-xl'>{sideDrawersData[locationType].directions.title}</h2>
            {sideDrawersData[locationType].directions.sections.map((element, i) => {
              return (<div className='location-info-directions-section mt-xl' key={i}>
                {element.title}
                {element.content}
              </div>)
            })}
          </div>
          <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
      </div>
    </div>
  )
}

export default LocationInfo;