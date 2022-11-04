import React from 'react';
import './SectionIntro.scss';

import PageTitle from '../../molecules/pageTitle/PageTitle';
import Overlay from '../../atoms/overlay/Overlay';

function SectionIntro({page, i}) {
  return (
    <div className={`section-intro__background-image ${i === 0 ? "section-intro__background-image--full-h" : ""} ${i === 0 || window.innerWidth < 992 ? "" : "hide"}`} id={page.pageName} style={{backgroundImage: `url(${page.sectionIntro.imageUrl})`}}>
        <PageTitle title={page.sectionIntro.title} subtitle={page.sectionIntro.subtitle} textColor={page.sectionIntro.pageTitleTextColor} gif={page.sectionIntro.gif}/>
        <Overlay />
    </div>
  )
}

export default SectionIntro;