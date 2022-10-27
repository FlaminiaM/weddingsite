import React from 'react';
import './Notification.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function Notification({type, message}) {
    const icon = type === "success" ? faCheck : faTimesCircle;
  return (
    <div className={`notification notification--${type} mt-xxl mb-xxl`}>
        <FontAwesomeIcon className='fa-lg' icon={icon}/>
        <span className='notification-message'>{message}</span>
    </div>
  )
}

export default Notification