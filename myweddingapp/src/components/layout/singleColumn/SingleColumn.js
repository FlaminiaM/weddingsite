import React from 'react';
import './SingleColumn.scss';

import SectionIntro from '../../organisms/sectionIntro/SectionIntro';
import Overlay from '../../atoms/overlay/Overlay';

function SingleColumn({pages}) {
  return (
    <div className='single-column-layout'>
      {pages.map((page, i) => (
        <React.Fragment key={page.id}>
          {!page.sectionIntro.showDesktopOnly ? (<><SectionIntro page={page} i={i} /> <Overlay /></>) : null}
          {!page.sectionContent.showDesktopOnly ? (<page.sectionContent.component />) : null}
        </React.Fragment>
      ))}
    </div>
  )
}

export default SingleColumn;