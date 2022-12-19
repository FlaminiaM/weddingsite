import React from 'react';
import './Button.scss';

import LoadingIcon from '../loadingIcon/LoadingIcon';
import { Link } from "react-scroll";

function Button({type, text, classes, clickHandler, isLoading}) {
  return (
    <button className={`btn btn--primary ${classes}`} type={type} onClick={clickHandler}>
      {!isLoading ? text : <LoadingIcon />}
    </button>
  )
}

export default Button