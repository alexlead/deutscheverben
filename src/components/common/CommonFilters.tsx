import React  from 'react';
import { levels } from './../../types/dataTypes';

interface ICommonFiltersProps {
  filterLevels: string[];
  updateFilterLevels: (levelsList: string[])=> void;
}

const CommonFilters: React.FunctionComponent<ICommonFiltersProps> = ({filterLevels, updateFilterLevels}) => {

const switchedOnLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
  if ( filterLevels.includes( e.target.value) ) {
    const index = filterLevels.indexOf( e.target.value )
    filterLevels.splice( index, 1 )
    updateFilterLevels( [ ...filterLevels])
  } else {
    updateFilterLevels( [ ...filterLevels, e.target.value ] )
  }
}

  return(
    <>
    <div className="input-group mb-3">
    {levels.map( (level, i) => 
    <div className="form-check form-switch mx-3" key={i}>
        <label><input type="checkbox" className="form-check-input" key={i} value={level} onChange={(e)=> switchedOnLevels(e) } checked={filterLevels.includes(level) ? true : false } />{level}</label> 
    </div>
    )}
    </div>
    </>
  );
};

export default CommonFilters;
