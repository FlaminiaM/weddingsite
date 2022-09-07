import React from 'react';
import './Image.scss';

function Image({name, size, type, classes}) {
  return (
    <img className={`img img--${size} ${classes}`} src={require(`../../../assets/images/${name}.${type}`)} alt={name} />
  )
}

export default Image;