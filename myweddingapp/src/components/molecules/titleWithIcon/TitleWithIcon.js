import React from 'react';
import './TitleWithIcon.scss';

function TitleWithIcon({sectionTitle, icon, type}) {
  return (
    <div className='title-with-icon'>
        {type === "primary" ? <h1 className='title-with-icon-text'>{sectionTitle}</h1> : <h2 className='title-with-icon-text'>{sectionTitle}</h2>}
        {icon}
    </div>
  )
}

export default TitleWithIcon;