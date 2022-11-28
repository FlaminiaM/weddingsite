import React from 'react';
import './Gifts.scss';

import PageContainer from '../../layout/pageContainer/PageContainer';
import suitcase from '../../../assets/images/suitcase.png';
import Line from '../../atoms/line/Line';
import Image from '../../atoms/image/Image';

function Gifts() {
  return (
    <PageContainer pageName="gifts">
      <div className='gifts txt-center'>
        <div className='gifts-top'>
          <h1 className='mb-xxl'>Gifts</h1>
          <h2 className='mb-xxl'>Honeymoon funds</h2>
          <p className='mb-xxl'>Celebrating with you on our wedding day is the greatest gift we could ask for! </p>
          <p className='mb-xxl'>However, if you do wish to surprise us with a gift, a contribution towards our honeymoon would be most appreciated.</p>
          <div>
            <p className='mb-md gifts-currency'><Image name="euro" type="png" size="xsmall"/> EUR</p>
            <div>
              <p>IBAN: GB51 REVO 0099 7075 8478 23</p>
              <p>BIC: REVOGB21</p>
            </div>
          </div>
          <Line classes='mt-xxl mb-xl' type='divider' orientation="horizontal" />
          <div>
            <p className='mb-md gifts-currency'><Image name="gbp" type="png" size="xsmall"/> GBP</p>
            <div>
              <p>Sort Code: 04-00-75</p>
              <p>Account Number: 13065815</p>
            </div>
          </div>
        </div>
        <div className='gifts-bottom'>
          <div className="gifts-bottom-image"><img src={suitcase} alt="suitcase" /></div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Gifts