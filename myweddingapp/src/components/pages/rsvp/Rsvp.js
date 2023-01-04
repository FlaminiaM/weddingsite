import React from 'react';
import './Rsvp.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';

import RsvpForm from '../../organisms/rsvpForm/RsvpForm';

function Rsvp({isItalian}) {
  return (
    <PageContainer pageName="rsvp" alignTop={true}>
      <div className='rsvp txt-center mt-xxl'>
        <h1>Can you be there?</h1>
        <RsvpForm isItalian={isItalian}/>
      </div>
    </PageContainer>
  )
}

export default Rsvp