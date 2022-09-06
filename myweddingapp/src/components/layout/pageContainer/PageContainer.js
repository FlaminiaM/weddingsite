import React from 'react';
import './PageContainer.scss';


function PageContainer({pageName, children}) {
  return (
    <div className='page-container' id={`page-${pageName}`}>
        {children}
    </div>
  )
}

export default PageContainer;