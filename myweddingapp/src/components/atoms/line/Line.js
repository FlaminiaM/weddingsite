import React from 'react';
import './Line.scss';

function Line({type, orientation}) {
  return (
    <div className={`line line--${type} line--${type}-${orientation}`}></div>
  )
}

export default Line;