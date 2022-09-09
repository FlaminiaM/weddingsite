import React from 'react';
import './RsvpForm.scss';

import InputGroup from '../../atoms/inputGroup/InputGroup';
import Button from '../../atoms/button/Button';

function RsvpForm() {
  return (
    <form className='rsvp-form'>
        <InputGroup 
          labelText = "First Name"
          isMandatory = {true}
          inputType = "text"
          inputName = "firstname"
          isFullWidth={false}
          hasError= {false}
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
        {/* <InputGroup 
          labelText = "Number of Guests"
          isMandatory = {true}
          inputType = "select"
          inputName = "guests"
          isFullWidth={false}
          isMulti={false}
          options= {[
            {
              label: "One",
              value: "one"
            },
            {
              label: "Two",
              value: "two"
            },
            {
              label: "Three",
              value: "three"
            },
            {
              label: "Four",
              value: "four"
            },
            {
              label: "Five",
              value: "five"
            }
          ]}
        />
        <InputGroup 
          labelText = "Full name of extra guests"
          isMandatory = {true}
          inputType = "textarea"
          inputName = "extraguests"
          isFullWidth={false}
        /> */}
        <InputGroup 
          labelText = "Dietary requirements"
          isMandatory = {true}
          inputType = "select"
          inputName = "diet"
          isFullWidth={true}
          isMulti={true}
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
          inputType = "radio-group"
          inputName = "yes"
          isFullWidth={true}
          options= {[
            {
              name: "I'll be there",
              value: "both"
            },
            {
              name: "I can't attend",
              value: "no"
            },
            {
              name: "Church only",
              value: "church"
            },
            {
              name: "Reception only",
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
        />
        <Button classes="mt-xl" type="submit" text="CONFIRM"/>
    </form>
  )
}

export default RsvpForm