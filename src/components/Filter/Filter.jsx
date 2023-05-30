import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterList } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import './Filter.css';

const Filter = () => {
  const inputValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    dispatch(filterList(value));
  };

  console.log('inputValue', inputValue);

  return (
    <div className="Filter">
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default Filter;