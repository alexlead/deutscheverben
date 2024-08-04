import React, { useEffect, useState } from 'react';
import { levels } from './../../types/dataTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addLevel, removeLevel, selectLevels, toggleMyList } from '../../store/slices/levelFiltersSlice';

interface ICommonFiltersProps {
}

const CommonFilters: React.FunctionComponent<ICommonFiltersProps> = () => {

  const dispatch = useDispatch();
  const reduxFiltersData = useSelector(selectLevels);
  const [filterLevels, setFilterLevels] = useState<string[]>([])

  useEffect(() => {
    setFilterLevels([...reduxFiltersData.filterLevelsArray])
  }, [])

  const switchedOnLevels = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (filterLevels.includes(e.target.value)) {
      const index = filterLevels.indexOf(e.target.value)
      filterLevels.splice(index, 1)
      dispatch(removeLevel(e.target.value))
      setFilterLevels([...filterLevels])
    } else {
      dispatch(addLevel(e.target.value))
      setFilterLevels([...filterLevels, e.target.value])
    }
  }

  const switchOnUserList = () => {
    dispatch(toggleMyList(!reduxFiltersData.filterMyList))
  }

  return (
    <>
      <div className="input-group mb-3">
        <div className="form-check form-switch mx-3 ">
          <label className='fs-4'><input type="checkbox" className="form-check-input" onChange={() => switchOnUserList()} checked={reduxFiltersData.filterMyList ? true : false} />My list</label>
        </div>
      </div>

      {!reduxFiltersData.filterMyList &&
        <div className="input-group mb-3">
          {levels.map((level, i) =>
            <div className="form-check form-switch mx-3" key={i}>
              <label><input type="checkbox" className="form-check-input" key={i} value={level} onChange={(e) => switchedOnLevels(e)} checked={filterLevels.includes(level) ? true : false} />{level}</label>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default CommonFilters;
