import React from 'react';
import './TitleWithIcon.scss';

function TitleWithIcon({sectionTitle, icon}) {
  return (
    <div className='title-with-icon'>
        <h2 className='mt-lg'>{sectionTitle}</h2>
        {icon}
    </div>
  )
}

export default TitleWithIcon;