import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Select from 'react-select';
import './InputGroup.scss';

function InputGroup({labelText, isMandatory, inputType, inputName, isFullWidth, hasError, errorMessage, options, isMulti}) {

  const inputJsx = (
    <div className={`input-group mb-md ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <input 
        className='input-group__input' 
        name={inputName} 
        id={inputName} 
        type={inputType}
      ></input>
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  );
  
  const inputRadioJsx = (
    <div className={`input-group mb-md ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <div className='input-group-radio-inputs-container'>
        {
          options && options.map((option, i) => (
            <div key={i} className='input-group-radio mb-s'>
              <input 
                className='input-group__input input-group-radio__input' 
                name={option.value} 
                id={option.value} 
                value={option.value}
                type="radio"
              ></input>
              <label className="input-group-radio__label" htmlFor={option.value}>{option.name}</label>
          </div>
          ))
        }
      </div>
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  )

  const textareaJsx = (
    <div className={`input-group mb-md ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <textarea 
        className='input-group__input' 
        name={inputName} 
        id={inputName} 
      ></textarea>
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  );

  const selectJsx = (
    <div className={`input-group mb-md ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'} ${hasError ? "input-group--error" : ""}`}>
      <label className='input-group-label mb-s mt-md' htmlFor={inputName}>{labelText}{isMandatory ? (<span className='input-group-label--mandatory'>*</span>) : null}</label>
      <Select isMulti={isMulti} options={options} />
      {/* <select 
        className='input-group__input' 
        name={inputName} 
        id={inputName} 
        multiple
      >
        <option name="" value=""></option>
        {options && options.map((option, i) => <option key={i} value={option.value}>{option.name}</option>)}
      </select> */}
      <div className='input-group-error-message'>
        <FontAwesomeIcon icon={faXmark} />
        <span className='input-group-error-message__text'>{errorMessage}</span>
      </div>
    </div>
  )

  return (
    <>
    {
      inputType === "radio-group" 
        ? inputRadioJsx 
        : (inputType === "textarea" 
          ? textareaJsx 
          : (inputType === "select" 
            ? selectJsx
            : inputJsx))
    }
    </>
  )
}

export default InputGroup