import React from 'react';
import './Home.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';
import Image from '../../atoms/image/Image';
import MenuContainer from '../../organisms/menuContainer/MenuContainer'

function Home() {
  return (
    <PageContainer pageName="homepage">
      <MenuContainer />
      <div className='homepage txt-center'>
        <Image classes="mb-xl" name="us" type="png" size="large"/>
        <h3 className='mb-xl mt-xl'>Saturday, 8th July 2023</h3>
        <h2 className='mb-xl mt-xl'>Duomo di Urbino, <br></br>Italy</h2>
        <Button classes='mb-xl mt-xl' type="button" text="RSVP" />
        <p className='mb-xl mt-xl'>View details</p>
        <Icon classes="mt-xxl" name="arrow-down" width={66} height={40} animation="bounce"/> 
      </div>
    </PageContainer>
  )
}

export default Home