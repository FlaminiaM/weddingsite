import React from 'react';
import './PageContainer.scss';


function PageContainer({pageName, children, hasDrawer}) {
  return (
    <div className={`page-container ${hasDrawer ? "page-container--with-drawer" : ""}`} id={`page-${pageName}`}>
        {children}
    </div>
  )
}

export default PageContainer;