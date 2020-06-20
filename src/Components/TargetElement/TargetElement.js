import React from 'react';

import './TargetElement.scss'

const TargetElement = ({ image, selected, onSelectItem }) => {
  const borderColor = selected ? 'tomato' : 'grey';
  const opacityValue = selected ? 1 : 0.1;

  const style = {
    border: `3px solid ${borderColor}`,
    padding: '1em',
    margin: '1em',
    width: '150px',
    heigth: '150px',
    opacity: opacityValue
  }

  const imgPath = require(`../../Images/${image}`);

  return <img onClick={onSelectItem} style={style} src={imgPath} alt={image} />
}

export default TargetElement
