import React from 'react';
import './Button.scss';

function Button({type, text}) {
  return (
    <button className='btn btn--primary' type={type}>{text}</button>
  )
}

export default Button