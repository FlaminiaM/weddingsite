import React from 'react';
import './MenuItem.scss';

function MenuItem({text, url}) {
  return (
    <li className='menu-item'>
        <a className='menu-item-link' href={url}>{text}</a>
    </li>
  )
}

export default MenuItem