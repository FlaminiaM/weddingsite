import React from 'react';
import './Rsvp.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';

import RsvpForm from '../../organisms/rsvpForm/RsvpForm';

function Rsvp({isItalian}) {
  const title = isItalian ? "Sarete dei nostri?" : "Can you be there?"
  return (
    <PageContainer pageName="rsvp" alignTop={true}>
      <div className='rsvp txt-center mt-xxl'>
        <h1>{title}</h1>
        <RsvpForm isItalian={isItalian}/>
      </div>
    </PageContainer>
  )
}

export default Rsvp