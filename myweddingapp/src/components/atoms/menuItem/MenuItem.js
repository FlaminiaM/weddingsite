import React from 'react';
import './MenuItem.scss';

import { Link } from "react-scroll";

function MenuItem({text, url}) {
  const handleSelection = (e) => {
    document.querySelectorAll(".menu-item-link").forEach(el => el.classList.remove("menu-item-link--active"))
    e.target.classList.add("menu-item-link--active")
  }
  return (
    <li className='menu-item'>
        <Link className={url === "page-homepage" ? 'menu-item-link menu-item-link--active' :'menu-item-link'} to={url} smooth={true} onClick={(e) => handleSelection(e)}>{text}</Link>
    </li>
  )
}

export default MenuItem