import React from 'react';
import './Image.scss';

function Image({name, size, type}) {
  return (
    <img className={`img img--${size}`} src={require(`../../../assets/images/${name}.${type}`)} alt={name} />
  )
}

export default Image;