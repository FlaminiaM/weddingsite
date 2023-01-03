import React from 'react';
import './SwitchLanguage.scss';

import { connect, ReactReduxContext } from 'react-redux'
import {changeLanguage} from '../../../redux/actions/languageActions';

import eng from '../../../assets/images/eng.png'
import ita from '../../../assets/images/ita.png'


function SwitchLanguage({changeLanguage, isItalian}) {
  const text = isItalian ? "Switch to English" : "Cambia per Italiano";
  const flag = isItalian ? eng : ita;
  return (
    <div className="switch-language" onClick={changeLanguage}>
      <img className='switch-language-flag' src={flag} alt='flag' />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isItalian: state.language.isItalian,
  }
}
export default connect((mapStateToProps), {changeLanguage} )(SwitchLanguage);