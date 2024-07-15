import React, { useEffect, useState } from 'react';
import { levels } from './../../types/dataTypes';

interface ICommonFiltersProps {
}

const CommonFilters: React.FunctionComponent<ICommonFiltersProps> = (props) => {

    // const [studyLevels , setStudyLevels ] = useState<string[]>([])

    // useEffect( () => {
    //     setStudyLevels(levels)
    // }, [])


  return(
    <>
    <div className="input-group mb-3">
    {levels.map( (level, i) => 
    <div className="form-check form-switch mx-3">
        <label><input type="checkbox" className="form-check-input" key={i} value={level} />{level}</label> 
    </div>
    )}
    </div>
    </>
  );
};

export default CommonFilters;
