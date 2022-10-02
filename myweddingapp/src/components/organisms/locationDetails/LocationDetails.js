import React from 'react';
import './LocationDetails.scss';

import TitleWithIcon from '../../molecules/titleWithIcon/TitleWithIcon';
import Line from '../../atoms/line/Line';
import { connect } from 'react-redux';
import {handleDrawerState} from '../../../redux/actions/drawerActions';

function LocationDetails({sectionTitle, titleIcon, venuName, venueAddress, linkText, handleDrawerState}) {
  const handleLinkClickEvent = (e) =>{
    e.preventDefault();
    handleDrawerState()
  }
  return (
    <div className='location-details mb-xxl'>
      <TitleWithIcon sectionTitle={sectionTitle} icon={titleIcon}/>
      <Line type="divider" orientation="horizontal" />
      <h3 className='mt-xl mb-xl new-line'>{venuName.split("<br/>").join("\n")}</h3>
      <h4 className='mb-xl new-line'>{venueAddress.split("<br/>").join("\n")}</h4>
      <a href="#" onClick={handleLinkClickEvent}>{linkText}</a>
    </div>
  )
}

export default connect(null, { handleDrawerState })(LocationDetails);