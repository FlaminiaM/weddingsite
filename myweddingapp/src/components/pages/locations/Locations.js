import React from 'react';
import './Locations.scss';

import { pagesContent } from '../../../data/pagesData';

import PageContainer from '../../layout/pageContainer/PageContainer';
import LocationDetails from '../../organisms/locationDetails/LocationDetails';
import Image from '../../atoms/image/Image';
import Icon from '../../atoms/icon/Icon';
import LocationInfo from '../../pages/locationInfo/LocationInfo';
import Line from '../../atoms/line/Line';


function Locations({isItalian}) {
  const content = isItalian ? pagesContent["italian"]["locations"] : pagesContent["english"]["locations"] ;

  return (
    <PageContainer pageName="locations">
      <div className='locations txt-center'>
        <h1>Locations</h1>
        <LocationDetails 
          sectionTitle={content.ceremony.sectionTitle} 
          titleIcon={<Image name="church" type="png" size="medium"/>} 
          venuName = {content.ceremony.venuName} 
          venueAddress= {content.ceremony.venueAddress} 
          linkText = {content.ceremony.linkText} 
          time={content.ceremony.time}
          insideDrawerComponent={<LocationInfo isItalian = {isItalian} locationType="ceremony"/>}
          />
        <Line type="divider" orientation="horizontal" />
        <LocationDetails 
          sectionTitle={content.venue.sectionTitle} 
          titleIcon={<Image name="dinner" type="png" size="medium"/>} 
          venuName = {content.venue.venuName} 
          venueAddress= {content.venue.venueAddress} 
          linkText = {content.venue.linkText} 
          time={content.venue.time}
          insideDrawerComponent={<LocationInfo isItalian = {isItalian} locationType="venue"/>}
          />
           {/* {window.innerWidth > 992 ? <Icon classes="mt-xxl" name="arrow-down" width={66}  height={20} animation="bounce"/>  : null}  */}
      </div>
    </PageContainer>
  )
}

export default Locations