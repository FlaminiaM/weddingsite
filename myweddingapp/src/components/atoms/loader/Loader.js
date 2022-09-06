import React from 'react';
import './Loader.scss';

import airplaneLoader from '../../../assets/gifs/airplaneLoop.gif'

function Loader() {
  return (
    <div className='loader loader--flex'>
        <div className='loader-welcome-message loader--flex'>
            <h1>Welcome</h1>
            <img className='loader-welcome-message__gif' src={airplaneLoader} alt='loader' />
        </div>
    </div>
  )
}

export default Loader