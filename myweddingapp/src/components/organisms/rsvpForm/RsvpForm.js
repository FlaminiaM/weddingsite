import React from 'react';
import './RsvpForm.scss';

import InputGroup from '../../atoms/inputGroup/InputGroup';

function RsvpForm() {
  return (
    <form className='rsvp-form'>
        <InputGroup 
          labelText = "First Name"
          isMandatory = {true}
          inputType = "text"
          inputName = "firstname"
          isFullWidth={false}
        />
        <InputGroup 
          labelText = "Last Name"
          isMandatory = {true}
          inputType = "text"
          inputName = "lastname"
          isFullWidth={false}
        />
        <InputGroup 
          labelText = "Email Address"
          isMandatory = {true}
          inputType = "email"
          inputName = "email"
          isFullWidth={true}
        />
    </form>
  )
}

export default RsvpForm