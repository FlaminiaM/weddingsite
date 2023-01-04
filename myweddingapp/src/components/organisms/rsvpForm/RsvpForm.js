import React from 'react';
import './RsvpForm.scss';
import airtable from 'airtable';
import {formFieldsData} from '../../../data/formfields';
import { connect, ReactReduxContext } from 'react-redux'
import {handleAddAttendee} from '../../../redux/actions/attendeeActions';

import InputGroup from '../../atoms/inputGroup/InputGroup';
import Button from '../../atoms/button/Button';
import Notification from '../../molecules/notification/Notification';
import AttendeesList from '../../molecules/attendeesList/AttendeesList'

function RsvpForm({attendees, handleAddAttendee, isItalian}) {
  const base = new airtable({apiKey: 'keyvOkFwPsBzIWG6W'}).base('appla7qDMc7scyGXp');
  const formFields = isItalian ? formFieldsData["italian"] : formFieldsData["english"];
  const subtitle = isItalian ? "Fateci sapere se potrete esserci o meno compilando il questionario sottostante entro il 31 Marzo 2023" : "Let us know if you can come and enjoy our special day with us by the 31st March 2023";
  const [isFormLoading, setIsFormLoading] = React.useState(false);
  const [formSubmittedSuccess, setFormSubmittedSucces] = React.useState(false);
  const [showDietaryReq, setShowDietaryReq] = React.useState(false);
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

    if(name === "attendance" && (value === "yes" || value === "receptiononly")){
      setShowDietaryReq(true);
    }
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
    console.log("in validate forms, errors:", errors)
    console.log(formState)
    let errorsArray = []
    formFields.forEach((element, i) => {
      if((formState[element.inputName] === "" || formState[element.inputName].length === 0) && element.isMandatory){
        errors[element.inputName] = {
          hasError: true,
          errorMessage: formFields.filter(field => field.inputName === element.inputName)[0].errorMessages.empty
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
    return errorsArray;
  }

  const formSubmitHandler = () =>{
    const errors = validateForm();
    if(errors.length === 0){
      setIsFormLoading(true);
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
          handleAddAttendee(formState);
          setIsFormLoading(false);
        }
      });
    }
  }

  const resetState = () => {
    setFormState({
      firstname: "",
      lastname: "",
      dietaryrequirements: [],
      attendance: [],
      notes: "",
    })
    setShowDietaryReq(false);
  }

  const addPersonHandler = () =>{
    setFormSubmittedSucces(false);
    resetState();
  }

  return (
    !formSubmittedSuccess ? 
      <>
        <p className='mt-xl'>{subtitle}</p>
        <form className='rsvp-form'>
          {formFields.map((formField, i) => (
            formField.inputName !== "dietaryrequirements" || showDietaryReq ? (<InputGroup 
              hasError= {formErrors[formField.inputName].hasError}
              errorMessage = {formErrors[formField.inputName].errorMessage}
              inputHandler = {inputHandler}
              focusHandler = {focusHandler}
              {...formField}
              key= {i}
            />) : null
          ))}
          <Button classes="mt-xl" type="button" text={isItalian ? "CONFERMA" : "CONFIRM"} isLoading={isFormLoading} clickHandler={formSubmitHandler}/>
          </form>
      </>
      : <>
        <Notification type="success" message={isItalian ? `Grazie per la conferma!` : `Thanks for letting us know!`} />
        <AttendeesList attendees={attendees} isItalian = {isItalian}/>
        <h3 className='mb-xxl'>{isItalian ? "Vuoi aggiungere un'altra persona?" : 'Is anyone coming with you?'}</h3> 
        <Button classes="mb-xxl" type='button' text={isItalian ? 'Aggiungi persona' : 'Add another person'} clickHandler={addPersonHandler}/>
      </>
  )
}

const mapStateToProps = (state) => {
  return {
    attendees: state.attendees.attendees
  }
}

export default connect(mapStateToProps, {handleAddAttendee} )(RsvpForm);