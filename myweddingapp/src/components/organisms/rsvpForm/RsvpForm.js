import React from 'react';
import './RsvpForm.scss';
import airtable from 'airtable';
import {formFields} from '../../../data/formfields';

import InputGroup from '../../atoms/inputGroup/InputGroup';
import Button from '../../atoms/button/Button';

function RsvpForm() {
  const base = new airtable({apiKey: 'keyvOkFwPsBzIWG6W'}).base('appla7qDMc7scyGXp');
  const [formErrors, setFormErrors] = React.useState({
    firstname: {
      hasError: false,
      errorMessage: ""
    },
    lastname: {
      hasError: false,
      errorMessage: ""
    },
    email: {
      hasError: false,
      errorMessage: ""
    },
    dietaryrequirements: {
      hasError: false,
      errorMessage: ""
    },
    attendance: {
      hasError: false,
      errorMessage: ""
    },
    notes: {
      hasError: false,
      errorMessage: ""
    },
  })

  const [formState, setFormState] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    dietaryrequirements: [],
    attendance: [],
    notes: "",
  })

  const updateFormState = (name, value) => {
    setFormState({
      ...formState,
      [name] :value,
    })
  }

  const inputHandler = (selection, selectedElement) => {
    const name = selection.target ? selection.target.name : selectedElement.name;
    const value = selection.target 
                    ? selection.target.value
                    : (Array.isArray(selection)
                        ? selection.map(el => el.value)
                        : selection.value );
    updateFormState(name, value);
  }

  const focusHandler = (e) => {
    const element = e.target.id;
    if(formErrors[element].hasError){
      setFormErrors({
        ...formErrors,
        [element] : {
          hasError: false,
          errorMessage: ""
        },
      })
    }
  }

  const validateForm = () =>{
    let errors = {...formErrors}
    let errorsArray = []
    formFields.forEach((element, i) => {
      if((formState[element.inputName] === "" || formState[element.inputName] == [])&& element.isMandatory){
        errors[element.inputName] = {
          hasError: true,
          errorMessage: "Please fill in this field"
        }
        errorsArray.push(element.inputName)
      } else{
        if(element.inputName === "email"){
          const emailValidationRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!formState[element.inputName].match(emailValidationRe)){
            console.log("something wrong with email")
            errors[element.inputName] = {
              hasError: true,
              errorMessage: "Please use a valid email address"
            }
            errorsArray.push(element.inputName)
          }
        } else{
          errors[element.inputName] = {
            hasError: false,
            errorMessage: ""
          }
          errorsArray = errorsArray.filter(el => el !== element.inputName);
        }
      }
    })
    setFormErrors(errors);
    console.log(errorsArray)
    return errorsArray;
  }

  const formSubmitHandler = () =>{
    const errors = validateForm();
    if(errors.length === 0){
      base('AttendanceData').create([
        {
          "fields": {...formState}
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
  }

  return (
    <form className='rsvp-form'>
      {formFields.map((formField, i) => (
        <InputGroup 
          hasError= {formErrors[formField.inputName].hasError}
          errorMessage = {formErrors[formField.inputName].errorMessage}
          inputHandler = {inputHandler}
          focusHandler = {focusHandler}
          {...formField}
          key= {i}
        />
      ))}
        <Button classes="mt-xl" type="button" text="CONFIRM" clickHandler={formSubmitHandler}/>
    </form>
  )
}

export default RsvpForm