import React from 'react';
import './Icon.scss';

function Icon({name, size}) {
  return (
    <img class={`icon icon--${size}`} src={require(`../../../assets/icons/${name}.png`)} alt={name} />
  )
}

export default Icon