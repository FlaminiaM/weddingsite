import React from 'react';
import TwoColumns from '../twoColumns/TwoColumns';
import SingleColumn from '../singleColumn/SingleColumn';

import { connect, ReactReduxContext } from 'react-redux'

function MainContainer({isDesktop, pages, isItalian}) {
  const pagesData = isItalian ? pages["italian"] : pages["english"];
  return (
    isDesktop 
    ? <TwoColumns pages={pagesData} isItalian={isItalian}/>
    : <SingleColumn pages = {pagesData} isItalian={isItalian}/>
  )
}

const mapStateToProps = (state) => {
  return {
    isItalian: state.language.isItalian,
  }
}
export default connect(mapStateToProps, {} )(MainContainer);