import React from 'react';
import './Loader.scss';

import airplaneLoader from '../../../assets/gifs/airplaneLoop.gif'
import us from '../../../assets/images/us.png'
import worldbg from '../../../assets/images/world-bg.png'
import ribbon from '../../../assets/images/ribbon.png'

function Loader() {
  return (
    <div className='loader loader--flex'>
        <div className='loader-welcome-message loader--flex'>
            {/* <h1>Welcome</h1> */}
          {/* <img className='' src={us} alt='loader' /> */}
            <div className="loader-bg" style={{backgroundImage: `url(${worldbg})`}}>
              <img className='slide-right' src={us} alt='loader' />
            </div>
            <div className='message slide-right'>
                <h1>Welcome</h1>
                <div className='ribbon'style={{backgroundImage: `url(${ribbon})`}}></div>
              </div>
            {/* <img className='loader-welcome-message__gif' src={airplaneLoader} alt='loader' /> */}
        </div>
    </div>
  )
}

export default Loader