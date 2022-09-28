import React from 'react';
import './LocationDetails.scss';

import TitleWithIcon from '../../molecules/titleWithIcon/TitleWithIcon';
import Line from '../../atoms/line/Line';

function LocationDetails({sectionTitle, titleIcon, venuName, venueAddress, linkText}) {
  // const handleLinkClickEvent = (e) =>{
  //   e.preventDefault();
  //   linkAction();
  // }
  return (
    <div className='location-details mb-xxl'>
      <TitleWithIcon sectionTitle={sectionTitle} icon={titleIcon}/>
      <Line type="divider" orientation="horizontal" />
      <h3 className='mt-xl mb-xl new-line'>{venuName.split("<br/>").join("\n")}</h3>
      <h4 className='mb-xl new-line'>{venueAddress.split("<br/>").join("\n")}</h4>
      <a href="#">{linkText}</a>
    </div>
  )
}

export default LocationDetails;