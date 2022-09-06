import React from 'react';
import './Button.scss';

function Button({type, text, classes}) {
  return (
    <button className={`btn btn--primary ${classes}`} type={type}>{text}</button>
  )
}

export default Button