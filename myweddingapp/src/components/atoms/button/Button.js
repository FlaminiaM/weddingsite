import React from 'react';
import './Button.scss';

import LoadingIcon from '../loadingIcon/LoadingIcon';

function Button({type, text, classes, clickHandler, isLoading}) {
  console.log("isLoading", isLoading)
  return (
    <button className={`btn btn--primary ${classes}`} type={type} onClick={clickHandler}>
      {!isLoading ? text : <LoadingIcon />}
    </button>
  )
}

export default Button