import React from 'react';
import './Locations.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import LocationDetails from '../../organisms/locationDetails/LocationDetails';
import Image from '../../atoms/image/Image';
import Icon from '../../atoms/icon/Icon';
import CeremonyInfo from '../../pages/ceremonyInfo/CeremonyInfo';
import VenueInfo from '../../pages/venueInfo/VenueInfo';
import Line from '../../atoms/line/Line';


function Locations() {
  return (
    <PageContainer pageName="locations">
      <div className='locations txt-center'>
        <h1>Locations</h1>
        <LocationDetails 
          sectionTitle="Ceremony" 
          titleIcon={<Image name="church" type="png" size="medium"/>} 
          venuName = "Cattedrale di Santa Maria Assunta"
          venueAddress= "Via Puccinotti, 29, 61029 <br/> Urbino PU, Italy"
          linkText = "View details"
          insideDrawerComponent={<CeremonyInfo />}
          />
        <Line type="divider" orientation="horizontal" />
        <LocationDetails 
          sectionTitle="Venue" 
          titleIcon={<Image name="dinner" type="png" size="medium"/>} 
          venuName = "Ristorante Casa Londei"
          venueAddress= "Via Reforzate, 43, 61040 <br/> Sant'Ippolito PU, Italy"
          linkText = "View details"
          insideDrawerComponent={<VenueInfo />}
          />
           {window.innerWidth > 992 ? <Icon classes="mt-xxl" name="arrow-down" width={66}  height={20} animation="bounce"/>  : null} 
      </div>
    </PageContainer>
  )
}

export default Locations