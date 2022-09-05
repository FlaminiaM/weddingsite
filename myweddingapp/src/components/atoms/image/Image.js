import React from 'react';
import './Image.scss';

function Image({name, size}) {
  return (
    <img className={`img img--${size}`} src={require(`../../../assets/icons/${name}.png`)} alt={name} />
  )
}

export default Image;