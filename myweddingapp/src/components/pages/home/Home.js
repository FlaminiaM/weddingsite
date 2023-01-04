import React from 'react';
import './Home.scss';

import { pagesContent } from '../../../data/pagesData';

import PageContainer from '../../layout/pageContainer/PageContainer';
import Icon from '../../atoms/icon/Icon';
import Image from '../../atoms/image/Image';
import MenuContainer from '../../organisms/menuContainer/MenuContainer'
import SwitchLanguage from '../../atoms/switchLanguage/SwitchLanguage';

function Home({isItalian}) {
  const content = isItalian ? pagesContent["italian"]["home"] : pagesContent["english"]["home"] ;
  return (
    <PageContainer pageName="homepage">
      <MenuContainer isItalian={isItalian}/>
      <SwitchLanguage />
      <div className='homepage txt-center'>
        <Image classes="mb-xl" name="us" type="png" size="large"/>
        {content}
        <Icon classes="mt-xxl" name="arrow-down" width={66} height={40} animation="bounce"/> 
      </div>
    </PageContainer>
  )
}

export default Home