import React from 'react';
import './PageTitle.scss';

function PageTitle({title, subtitle, textColor, gif}) {
  return (
    <div className={`page-title-container page-title-container--${textColor}`}>
        <div className={gif ? "page-title-container__title page-title-container__title--with-gif" : "page-title-container__title"}>
            <h1>{title}</h1>
            {gif ? (<img src={gif} alt="gif" />) : null}
        </div>
        {subtitle ? (<h3 className='new-line'>{subtitle.split("<br/>").join("\n")}</h3>) : null }
    </div>
  )
}

export default PageTitle