import React from 'react';
import './RsvpQuestionnaire.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faChurch, faUtensils } from '@fortawesome/free-solid-svg-icons'

function RsvpQuestionnaire() {
  return (
    <div  className='rsvp-questionnaire'>
         <div className='rsvp-questionnaire-attendance-answer' value='yes'><FontAwesomeIcon className='fa-2x' icon={faThumbsUp}/><p>I'll be there!</p></div>
         <div className='rsvp-questionnaire-attendance-answer' value='no'><FontAwesomeIcon className='fa-2x' icon={faThumbsDown}/><p>I can't attend</p></div>
         <div className='rsvp-questionnaire-attendance-answer' value='churchonly'><FontAwesomeIcon className='fa-2x' icon={faChurch}/><p>Church only!</p></div>
         <div className='rsvp-questionnaire-attendance-answer' value='receptiononly'><FontAwesomeIcon className='fa-2x' icon={faUtensils}/><p>Reception only!</p></div>
    </div>
  )
}

export default RsvpQuestionnaire;