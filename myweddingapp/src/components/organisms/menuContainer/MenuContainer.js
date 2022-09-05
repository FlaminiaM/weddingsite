import React, { useEffect, useState } from 'react';
import './MenuContainer.scss';
import {menueItemsData} from '../../../data/menu';
import MenuItem from '../../atoms/menuItem/MenuItem';

function Menu() {
  const fetchMenuItems = () => menueItemsData;
  const [menuItems, setMenuItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuItems = fetchMenuItems();
    console.log("menuItems", menuItems)
    setMenuItems(menuItems);
  }, []);

  const menuButtonHandler = () => {
    console.log("hello")
    setIsOpen(!isOpen);
    console.log(isOpen)
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
            <MenuItem key={item.id} text={item.text} url={item.url}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;