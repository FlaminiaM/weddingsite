import React from 'react';
import './TwoColumns.scss';

import Overlay from '../../atoms/overlay/Overlay';
import LoaderDesktop from '../../molecules/loaderDesktop/LoaderDesktop';
import SectionIntro from '../../organisms/sectionIntro/SectionIntro';

function TwoColumns({pages, isItalian}) {
  
  const currentPageRef = React.useRef("homepage");
  const arrayRefs = React.useRef([]);
  const [imgsLoaded, setImgsLoaded] = React.useState(false);

  const imagesToPreload = [];
  pages.map((page) => imagesToPreload.push(page.sectionIntro.imageUrl));
  
  React.useEffect(() => {
    const loadImage = imageUrl => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = imageUrl
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(imageUrl)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(imagesToPreload.map(imageUrl => loadImage(imageUrl)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
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
            document.querySelectorAll(".section-intro__background-image").forEach((el) => el.classList.add("hide"));
            document.getElementById(page).classList.remove("hide");
            document.querySelector(".section-intro__background-image").classList.add("fade-in-down");
          }
        }
      }
    })
  }

  const displaySectionsRight = pages.map((page) => (
    <React.Fragment key={page.id}>
      <div className='two-columns-layout-right-section' page={page.pageName} ref={addToRefs}><page.sectionContent.component isItalian={isItalian} /></div>
    </React.Fragment>
  ))

  const displaySectionsLeft = pages.map((page, i) => <SectionIntro page={page} i={i} key={page.id} />)

  return (
    <main>
        { imgsLoaded ? (
          <div className='two-columns-layout'>
              <div className='two-columns-layout-left'>
                  {displaySectionsLeft}
                  <Overlay />
              </div>
              <div className='two-columns-layout-right'>
                  {displaySectionsRight}
              </div>
              {/* <SideDrawer/> */}
          </div>
        ) : (
          <LoaderDesktop />
        )}

      </main>
  )
}

export default TwoColumns;