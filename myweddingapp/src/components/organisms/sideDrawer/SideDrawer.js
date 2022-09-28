import React from 'react';
import './SideDrawer.scss';

import Icon from '../../atoms/icon/Icon';

function SideDrawer({isOpen, handleDrawerState}) {
  isOpen ? document.querySelector("body").classList.add("no-scroll") : document.querySelector("body").classList.remove("no-scroll");
  return (
    <div className={`side-drawer ${isOpen ? "slide-in-right" : "slide-out-right"}`}>
        <h1>Side drawer</h1>
        <div className='side-drawer-close-icon' onClick={handleDrawerState}><Icon classes="mt-xxl" name="arrow-down" size={66}/> </div>
    </div>
  )
}

export default SideDrawer;