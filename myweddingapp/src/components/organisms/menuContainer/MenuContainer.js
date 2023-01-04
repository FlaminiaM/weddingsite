import React, { useEffect, useState } from 'react';
import './MenuContainer.scss';
import {menuItemsData} from '../../../data/menu';
import MenuItem from '../../atoms/menuItem/MenuItem';

function Menu({isItalian}) {
  const menuItems = isItalian ? menuItemsData["italian"] : menuItemsData["english"];
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`menu-container ${isOpen ? 'open' : ""}`}>
      <div className='menu-container-button' onClick={menuButtonHandler}>
        <div className='menu-container-button__hamburger-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='menu-container-button__label'>menu</div>
      </div>
      <div className='menu-container-inner'>
        <ul className='menu-container-inner-list'>
          {menuItems.map((item) => (
            <MenuItem key={item.id} text={item.text} url={item.url} menuButtonHandler={menuButtonHandler}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;