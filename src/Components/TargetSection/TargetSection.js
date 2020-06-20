import React from 'react';
import TargetElement from '../TargetElement/TargetElement'

import './TargetSection.scss'

const TargetSection = ({ targetItems, onSelectItem, targetElementDiametr, onChangeTargetElementDiametr }) => {

  const elements = targetItems.map((item, index) => {
    return (
      <TargetElement
        key={index}
        image={item.image}
        selected={item.selected}
        onSelectItem={() => onSelectItem(index)}
      />
    );
  });

  return (
    <div>
      <form className="target-element-diametr form-inline">
        <p>Target element diametr, mm:</p>
        <input type="number"
          value={targetElementDiametr}
          onChange={onChangeTargetElementDiametr}
          className="form-control" />
      </form>
      {elements}
    </div>
  )
}

export default TargetSection
