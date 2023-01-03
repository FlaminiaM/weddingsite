import React from 'react';
import './SingleColumn.scss';

import SectionIntro from '../../organisms/sectionIntro/SectionIntro';
import LoaderMobile from '../../molecules/loaderMobile/LoaderMobile';


function SingleColumn({pages, isItalian}) {
  const [imgsLoaded, setImgsLoaded] = React.useState(false);
  const [timerLoader, setTimerLoader] = React.useState(false);

  window.setTimeout(() => {
    setTimerLoader(true);
  }, 3000);
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
  }, []);
  return (
    <>
    { (imgsLoaded && timerLoader) ? (
            <div className='single-column-layout'>
            {pages.map((page, i) => (
              <React.Fragment key={page.id}>
                {!page.sectionIntro.showDesktopOnly ? (<><SectionIntro page={page} i={i} /></>) : null}
                {!page.sectionContent.showDesktopOnly ? (<page.sectionContent.component isItalian={isItalian}/>) : null}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <LoaderMobile />
        )}
    </>
  )
}

export default SingleColumn;