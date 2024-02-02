import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filterSlice';
import css from './Form.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name{' '}
      <input
        type="text"
        className={css.filterInput}
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
