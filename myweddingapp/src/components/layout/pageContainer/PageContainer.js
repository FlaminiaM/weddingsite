import React from 'react';
import './PageContainer.scss';


function PageContainer({pageName, children, hasDrawer, alignTop}) {
  return (
    <div className={`page-container ${hasDrawer ? "page-container--with-drawer" : ""} ${alignTop ? "page-container--align-t" : ""}`} id={`page-${pageName}`}>
        {children}
    </div>
  )
}

export default PageContainer;