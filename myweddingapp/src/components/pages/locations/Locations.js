import React from 'react';
import './Locations.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import LocationDetails from '../../organisms/locationDetails/LocationDetails';
import Image from '../../atoms/image/Image';
import Icon from '../../atoms/icon/Icon';


function Locations() {
  return (
    <PageContainer pageName="locations">
      <div className='locations txt-center'>
        <h1>Locations</h1>
        <LocationDetails 
          sectionTitle="Ceremony" 
          titleIcon={<Image name="church" type="png" size="medium"/>} 
          venuName = "Cattedrale di Santa Maria <br/> Assunta"
          venueAddress= "Via Puccinotti, 29, 61029 <br/> Urbino PU, Italy"
          linkText = "View details"
          />
        <LocationDetails 
          sectionTitle="Venue" 
          titleIcon={<Image name="dinner" type="png" size="medium"/>} 
          venuName = "Ristorante <br/> Casa Londei"
          venueAddress= "Via Reforzate, 43, 61040 <br/> Sant'Ippolito PU, Italy"
          linkText = "View details"
          />
          <Icon classes="mt-xxl" name="arrow-down" size={66} animation="bounce"/> 
      </div>
    </PageContainer>
  )
}

export default Locations