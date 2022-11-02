import React from 'react';
import TwoColumns from '../twoColumns/TwoColumns';
import SingleColumn from '../singleColumn/SingleColumn';

function MainContainer({isDesktop, pages}) {
  return (
    isDesktop 
    ? <TwoColumns pages={pages}/>
    : <SingleColumn pages = {pages}/>
  )
}

export default MainContainer;