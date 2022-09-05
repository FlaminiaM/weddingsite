import React from 'react';
import './Icon.scss';
import Icons from '../../../assets/icons/icons.svg';

function Icon({name, size, color, animation}) {
  return (
    // <img class={`icon icon--${size}`} src={require(`../../../assets/icons/${name}.${type}`)} alt={name} />
    <svg className={`icon icon-${name} ${animation}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  )
}

export default Icon;