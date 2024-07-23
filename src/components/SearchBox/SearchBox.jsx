import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchWrap}>
      <label className={css.searchLabel} htmlFor="name">
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        value={filter}
        type="text"
        name="name"
        onChange={handleSearch}
      />
    </div>
  );
}
