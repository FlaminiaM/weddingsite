import React from 'react';
import './MenuItem.scss';

import { Link } from "react-scroll";

function MenuItem({text, url, menuButtonHandler}) {
  const handleSelection = (e) => {
    document.querySelectorAll(".menu-item-link").forEach(el => el.classList.remove("menu-item-link--active"))
    e.target.classList.add("menu-item-link--active");
    menuButtonHandler();
  }
  return (
    <li className='menu-item'>
        <Link className='menu-item-link' activeClass="menu-item-link--active" to={url} smooth={true} spy={true} onClick={(e) => handleSelection(e)}>{text}</Link>
    </li>
  )
}

export default MenuItem