import React from 'react';
import './LoaderDesktop.scss';

import us from '../../../assets/images/us.png'
import worldbg from '../../../assets/images/world-bg.png'

function LoaderDesktop() {
  return (
    <div className='loader loader--flex'>
        <div className='loader-wrapper loader--flex'>
            <div className="loader-wrapper-bg" style={{backgroundImage: `url(${worldbg})`}}>
              <img className='loader-wrapper-bg-img slide-right' src={us} alt='loader' />
            </div>
            <div className='loader-wrapper-message slide-right'><h1>Welcome!</h1></div>
        </div>
    </div>
  )
}

export default LoaderDesktop