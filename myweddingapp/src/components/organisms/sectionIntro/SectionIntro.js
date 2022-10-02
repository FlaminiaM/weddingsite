import React from 'react';
import './SectionIntro.scss';

import PageTitle from '../../molecules/pageTitle/PageTitle';

function SectionIntro({page, i}) {
  return (
    <div className={`section-intro__background-image  ${i === 0 || window.innerWidth < 768 ? "" : "hide"}`} id={page.pageName} style={{backgroundImage: `url(${page.sectionIntro.imageUrl})`}}>
        <PageTitle title={page.sectionIntro.title} subtitle={page.sectionIntro.subtitle} textColor={page.sectionIntro.pageTitleTextColor} gif={page.sectionIntro.gif}/>
    </div>
  )
}

export default SectionIntro;