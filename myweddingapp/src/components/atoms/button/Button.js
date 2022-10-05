import React from 'react';
import './Button.scss';

function Button({type, text, classes, clickHandler}) {
  return (
    <button className={`btn btn--primary ${classes}`} type={type} onClick={clickHandler}>{text}</button>
  )
}

export default Button