import React from 'react';
import './Home.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';

function Home() {
  return (
    <PageContainer pageName="homepage">
      <div className='homepage txt-center'>
        <h3 className='mb-xl'>Saturday, 8th July 2023</h3>
        <h2 className='mb-xl'>Duomo di Urbino, <br></br>Italy</h2>
        <Button classes='mb-xl' type="button" text="RSVP" />
        <p className='mb-xl'>View details</p>
        <Icon classes="mt-xl" name="arrow-down" size={66} animation="bounce"/> 
      </div>
    </PageContainer>
  )
}

export default Home