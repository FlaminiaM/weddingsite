import React from 'react';
import './TitleWithIcon.scss';

function TitleWithIcon({sectionTitle, icon, type}) {
  return (
    <div className='title-with-icon'>
        {type === "primary" ? <h1 className='mt-lg'>{sectionTitle}</h1> : <h2 className='mt-lg'>{sectionTitle}</h2>}
        {icon}
    </div>
  )
}

export default TitleWithIcon;