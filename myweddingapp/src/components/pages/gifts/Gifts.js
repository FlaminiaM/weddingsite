import React from 'react';
import './Gifts.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import suitcase from '../../../assets/images/suitcase.png';

function Gifts() {
  return (
    <PageContainer pageName="gifts">
      <div className='gifts txt-center'>
        <div className='gifts-top'>
          <h1 className='mb-xxl'>Gifts</h1>
          <h2 className='mb-xxl'>Honeymoon funds</h2>
          <p className='mb-xxl'>Celebrating with you on our wedding day is the greatest gift we could ask for! </p>
          <p className='mb-xxl'>However, if you do wish to surprise us with a gift, a contribution towards our honeymoon would be most appreciated.</p>
          <h3>IT 1234 4444 0000 4444 345</h3>
        </div>
        <div className='gifts-bottom'>
          <div className="gifts-bottom-image"><img src={suitcase} alt="suitcase" /></div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Gifts