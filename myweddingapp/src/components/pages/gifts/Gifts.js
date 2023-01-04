import React from 'react';
import './Gifts.scss';

import { pagesContent } from '../../../data/pagesData';

import PageContainer from '../../layout/pageContainer/PageContainer';
import suitcase from '../../../assets/images/suitcase.png';
import Line from '../../atoms/line/Line';
import Image from '../../atoms/image/Image';

function Gifts({isItalian}) {
  const content = isItalian ? pagesContent["italian"]["gifts"] : pagesContent["english"]["gifts"] ;
  return (
    <PageContainer pageName="gifts">
      <div className='gifts txt-center'>
        <div className='gifts-top'>
          {content}
          <div>
            <div className='mb-s gifts-currency'><Image name="euro" type="png" size="xsmall"/> EUR</div>
            <div>
              <p>IBAN: GB51 REVO 0099 7075 8478 23</p>
              <p>BIC: REVOGB21</p>
            </div>
          </div>
          <Line classes='mt-md mb-md' type='divider' orientation="horizontal" />
          <div>
            <div className='mb-s gifts-currency'><Image name="gbp" type="png" size="xsmall"/> GBP</div>
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