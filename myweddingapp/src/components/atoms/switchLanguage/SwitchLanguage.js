import React from 'react';
import './SwitchLanguage.scss';

import { connect, ReactReduxContext } from 'react-redux'
import {changeLanguage} from '../../../redux/actions/languageActions';


function SwitchLanguage({changeLanguage, isItalian}) {
  const text = isItalian ? "Switch to English" : "Cambia per Italiano"
  return (
    <div className="switch-language" onClick={changeLanguage}>{text}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    isItalian: state.language.isItalian,
  }
}
export default connect((mapStateToProps), {changeLanguage} )(SwitchLanguage);