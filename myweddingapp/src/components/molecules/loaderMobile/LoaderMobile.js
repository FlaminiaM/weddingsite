import React from 'react';
import './LoaderMobile.scss';

import us from '../../../assets/images/us.png'
import Icon from '../../atoms/icon/Icon';

function LoaderMobile() {
  return (
    <div className='loader loader-m loader--flex'>
        <div className='loader-m-welcome-message loader--flex'>
          <div className='loader-m-message text-focus-in'><p>Welcome!</p></div>
          <img className='loader-m-paper-plane plane' src={us} alt='loader' />
          <div className='loader-m-clouds'>
          <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--big loader-m-clouds-cloud--front slowest" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--distant loader-m-clouds-cloud--smaller" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--small slow" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--big loader-m-clouds-cloud--front slowest" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--distant loader-m-clouds-cloud--smaller" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--small slow" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--distant slow loader-m-clouds-cloud--massive" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--distant slow loader-m-clouds-cloud--massive" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud loader-m-clouds-cloud--distant slow loader-m-clouds-cloud--massive" width="762" height="331"/>
            <Icon name='cloud' classes="cloud loader-m-clouds-cloud slower" width="762" height="331"/>
          </div>
        </div>
    </div>
  )
}

export default LoaderMobile