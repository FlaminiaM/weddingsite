import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Select from 'react-select';
import './InputGroup.scss';

function InputGroup({labelText, isMandatory, inputType, inputName, isFullWidth, hasError, errorMessage, options, isMulti, inputHandler, focusHandler}) {
  const inputJsx = (
    <div className={`input-group input-group--${inputName} mb-lg ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <input 
        className='input-group__input' 
        name={inputName} 
        id={inputName} 
        type={inputType}
        onChange = {inputHandler}
        onFocus = {focusHandler}
      ></input>
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  );

  const textareaJsx = (
    <div className={`input-group input-group--${inputName} mb-lg ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <textarea 
        className='input-group__input' 
        name={inputName} 
        id={inputName} 
        onChange = {inputHandler}
        onFocus = {focusHandler}
      ></textarea>
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  );

  const selectJsx = (
    <div className={`input-group input-group--${inputName} mb-lg ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <Select isMulti={isMulti} options={options} name={inputName} onChange = {inputHandler} onFocus = {focusHandler} inputId={inputName}/>
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  )

  return (
    <>
    {
      inputType === "textarea" 
        ? textareaJsx 
        : (inputType === "select" 
          ? selectJsx
          : inputJsx)
    }
    </>
  )
}

export default InputGroup