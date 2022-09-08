import React from 'react';
import './Rsvp.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
// import LocationDetails from '../../organisms/locationDetails/LocationDetails';
// import Image from '../../atoms/image/Image';
// import Icon from '../../atoms/icon/Icon';

import RsvpForm from '../../organisms/rsvpForm/RsvpForm';

function Rsvp() {
  return (
    <PageContainer pageName="rsvp">
      <div className='rsvp txt-center'>
        <h1>Can you be there?</h1>
        <p className='mt-xl'>Let us know if you can come and enjoy our special day with us!</p>
        <RsvpForm />
      </div>
    </PageContainer>
  )
}

export default Rsvp