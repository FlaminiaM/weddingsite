import React from 'react';
import './Line.scss';

function Line({type, orientation, classes}) {
  return (
    <div className={`line line--${type} line--${type}-${orientation} ${classes}`}></div>
  )
}

export default Line;