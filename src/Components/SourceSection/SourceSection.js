import React from 'react';
import Cylinder from '../../Images/cylinder.png';
import './SourceSection.scss'

const SourceSection = ({ sourceMaterialDiametr, sourceMaterialLength, onChangeSourceElementDiametr }) => {
  return (
    <div className="source-element-section">
      <form className="source-element-diametr form-inline">
        <p>Source material diametr, mm:</p>
        <input type="number"
          value={sourceMaterialDiametr}
          onChange={onChangeSourceElementDiametr}
          className="form-control" />
      </form>
      <img src={Cylinder} alt='Cylinder' />
      <p className="source-element-length">
        Source material length, mm:
        <span>{sourceMaterialLength}</span>
      </p>


    </div>
  )
}

export default SourceSection
