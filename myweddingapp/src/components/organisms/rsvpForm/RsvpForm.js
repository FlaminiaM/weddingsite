import React from 'react';
import './RsvpForm.scss';
import airtable from 'airtable';
import {formFields} from '../../../data/formfields';
import { connect, ReactReduxContext } from 'react-redux'
import {handleAddAttendee} from '../../../redux/actions/attendeeActions';

import InputGroup from '../../atoms/inputGroup/InputGroup';
import Button from '../../atoms/button/Button';
import Notification from '../../molecules/notification/Notification';
import AttendeesList from '../../molecules/attendeesList/AttendeesList'

function RsvpForm({attendees, handleAddAttendee}) {
  const base = new airtable({apiKey: 'keyvOkFwPsBzIWG6W'}).base('appla7qDMc7scyGXp');
  const [formSubmittedSuccess, setFormSubmittedSucces] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({
    firstname: {
      hasError: false,
      errorMessage: ""
    },
    lastname: {
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
        errors[element.inputName] = {
          hasError: false,
          errorMessage: ""
        }
        errorsArray = errorsArray.filter(el => el !== element.inputName);
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
        } else{
          setFormSubmittedSucces(true);
          handleAddAttendee(formState)
        }
      });
    }
  }

  const addPersonHandler = () =>{
    setFormSubmittedSucces(false);
  }

  return (
    !formSubmittedSuccess ? 
      <>
        <p className='mt-xl'>Let us know if you can come and enjoy our special day with us!</p>
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
      </>
      : <>
        <Notification type="success" message={`Thanks for letting us know!`} />
        <AttendeesList attendees={attendees}/>
        <h3 className='mb-xxl'>Is someone coming with you?</h3> 
        <Button type='button' text='Add another person' clickHandler={addPersonHandler}/>
      </>
      
  )
}

const mapStateToProps = (state) => {
  return {
    attendees: state.attendees.attendees
  }
}

export default connect(mapStateToProps, {handleAddAttendee} )(RsvpForm);