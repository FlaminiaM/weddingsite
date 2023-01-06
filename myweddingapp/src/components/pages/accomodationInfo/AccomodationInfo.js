import React from 'react';
import './Accomodation.scss';

import Line from '../../atoms/line/Line';

import { sideDrawersData } from '../../../data/sideDrawersData';


function Accomodation({isItalian}) {
  const content = isItalian ? sideDrawersData["italian"]["accomodation"] : sideDrawersData["english"]["accomodation"];
  return (
    <div className='accomodation'>
        {content.title}
        {content.subtitle}
        <div className='accomodation-options mb-lg'>
          {
            content.options.map((option, i) => (
              <a target="_blank" href={option.link} key={i} className='accomodation-option'>
                <h3>{option.name}</h3>
                <h4>{option.city}</h4>
                <p class='accomodation-option-findmore'> {option.linkText}</p>
              </a>
            ))
          }
        </div>
        <div className='accomodation-more mb-lg'>{content.footer}</div>

    </div>
  )
}

export default Accomodation;