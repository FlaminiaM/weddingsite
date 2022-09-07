import React from 'react';
import './Home.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';
import Image from '../../atoms/image/Image';

function Home() {
  return (
    <PageContainer pageName="homepage">
      <div className='homepage txt-center'>
        <Image classes="mb-xl" name="airballoon" type="png" size="medium"/>
        <h3 className='mb-xxl'>Saturday, 8th July 2023</h3>
        <h2 className='mb-xxl'>Duomo di Urbino, <br></br>Italy</h2>
        <Button classes='mb-xxl' type="button" text="RSVP" />
        <p className='mb-xxl'>View details</p>
        <Icon classes="mt-xxl" name="arrow-down" size={66} animation="bounce"/> 
      </div>
    </PageContainer>
  )
}

export default Home