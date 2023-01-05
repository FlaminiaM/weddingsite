import React from 'react';
import './Accomodation.scss';

import Line from '../../atoms/line/Line';

import { sideDrawersData } from '../../../data/sideDrawersData';


function Accomodation({isItalian}) {
  const content = isItalian ? sideDrawersData["italian"]["accomodation"] : sideDrawersData["english"]["accomodation"];
  return (
    <div className='accomodation'>
        {content.title}
        
    </div>
  )
}

export default Accomodation;