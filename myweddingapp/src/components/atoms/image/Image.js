import React from 'react';
import './Image.scss';

function Image({name, size}) {
  return (
    <img class={`img img--${size}`} src={require(`../../../assets/icons/${name}.png`)} alt={name} />
  )
}

export default Image;