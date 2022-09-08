import React from 'react';
import './InputGroup.scss';

function InputGroup({labelText, isMandatory, inputType, inputName, isFullWidth}) {
  return (
    <div className={`input-group ${isFullWidth ? 'input-group--full-width' : 'input-group--half-width'}`}>
        <label className='input-group__label' for={inputName}>{labelText}{isMandatory ? (<span className='input-group__mandatory'>*</span>) : null}</label>
        <input 
          className='input-group__input' 
          name={inputName} 
          id={inputName} 
          type={inputType}
        ></input>
    </div>
  )
}

export default InputGroup