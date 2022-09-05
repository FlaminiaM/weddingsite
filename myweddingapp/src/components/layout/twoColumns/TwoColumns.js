import React from 'react';
import './TwoColumns.scss';

import Overlay from '../../atoms/overlay/Overlay';
import PageTitle from '../../atoms/pageTitle/PageTitle';

function TwoColumns({sectionLeftContent, sectionRightContent}) {
  
  const currentPageRef = React.useRef("home");
  const arrayRefs = React.useRef([]);
  
  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const isElementXPercentInViewport = (el, percentVisible) => {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

  const addToRefs = (el) => {
    if(el && !arrayRefs.current.includes(el)){
      arrayRefs.current.push(el);
    }
  }

  const scrollHandler = () => {
    arrayRefs.current.forEach((element) =>{
      if(isElementXPercentInViewport(element, 60)){
        const page = element.getAttribute("page");
        if(page !== currentPageRef.current){
          currentPageRef.current = page;
          if(document.getElementById(page).classList.contains("hide")){
            document.querySelectorAll(".two-columns-layout-left__background-image").forEach((el) => el.classList.add("hide"));
            document.getElementById(page).classList.remove("hide");
            document.querySelector(".two-columns-layout-left").classList.add("fade-in-down");
          }
        }
      }
    })
  }

  const displaySectionsRight = sectionRightContent.map((el) => (
    <React.Fragment key={el.id}>
      <div className='two-columns-layout-right-section' page={el.page} ref={addToRefs}><el.component /></div>
    </React.Fragment>
  ))

  const displaySectionsLeft = sectionLeftContent.map((el, i) => (
    <React.Fragment key={el.id}>
      <div className={`two-columns-layout-left__background-image  ${i === 0 ? "" : "hide"}`} id={el.page} style={{backgroundImage: `url(${el.imageUrl})`}}>
        <PageTitle title={el.title} subtitle={el.subtitle} textColor={el.pageTitleTextColor} gif={el.gif}/>
      </div>
    </React.Fragment>
  ))


  return (
    <div className='two-columns-layout'>
        <div className='two-columns-layout-left'>
            {displaySectionsLeft}
            <Overlay />
        </div>
        <div className='two-columns-layout-right'>
            {displaySectionsRight}
        </div>
    </div>
  )
}

export default TwoColumns;