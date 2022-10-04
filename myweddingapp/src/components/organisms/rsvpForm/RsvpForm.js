import React from 'react';
import './RsvpForm.scss';

import InputGroup from '../../atoms/inputGroup/InputGroup';
import Button from '../../atoms/button/Button';

function RsvpForm() {
  const inputHandler = (e) => console.log(e.target.value)
  const selectInputHandler = (e) => console.log(e)
  return (
    <form className='rsvp-form'>
        <InputGroup 
          labelText = "First Name"
          isMandatory = {true}
          inputType = "text"
          inputName = "firstname"
          isFullWidth={false}
          hasError= {false}
          inputHandler = {inputHandler}
        />
        <InputGroup 
          labelText = "Last Name"
          isMandatory = {true}
          inputType = "text"
          inputName = "lastname"
          isFullWidth={false}
          inputHandler = {inputHandler}
        />
        <InputGroup 
          labelText = "Email Address"
          isMandatory = {true}
          inputType = "email"
          inputName = "email"
          isFullWidth={true}
          inputHandler = {inputHandler}
        />
        <InputGroup 
          labelText = "Dietary requirements"
          isMandatory = {true}
          inputType = "select"
          inputName = "diet"
          isFullWidth={true}
          isMulti={true}
          inputHandler = {selectInputHandler}
          options= {[
            {
              label: "Gluten free",
              value: "gf"
            },
            {
              label: "Vegetarian",
              value: "vegetarain"
            },
            {
              label: "Vegan",
              value: "vegan"
            },
            {
              label: "Nut allergy",
              value: "nonut"
            }
          ]}
        />
        <InputGroup 
          labelText = "Attendance"
          isMandatory = {true}
          inputType = "select"
          inputName = "attendance"
          isFullWidth={true}
          isMulti={false}
          inputHandler = {selectInputHandler}
          options= {[
            {
              label: "I'll be there",
              value: "both"
            },
            {
              label: "I can't attend",
              value: "no"
            },
            {
              label: "Church only",
              value: "church"
            },
            {
              label: "Reception only",
              value: "reception"
            }
          ]}
        />
        <InputGroup 
          labelText = "Anything else you want to let us know?"
          isMandatory = {false}
          inputType = "textarea"
          inputName = "extra"
          isFullWidth={true}
          inputHandler = {inputHandler}
        />
        <Button classes="mt-xl" type="submit" text="CONFIRM"/>
    </form>
  )
}

export default RsvpForm