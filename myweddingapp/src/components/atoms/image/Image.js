import React from 'react';
import './Image.scss';

function Image({name, size, type, classes}) {
  return (
    <div className={`image-container image-container--${size} ${classes}`}>
      <img src={require(`../../../assets/images/${name}.${type}`)} alt={name} />
    </div>
  )
}

export default Image;