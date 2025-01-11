import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { setStatusFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.filters);

  const [searchTerm, setSearchTerm] = useState(status);

  const handleSearch = useDebouncedCallback(param => {
    dispatch(setStatusFilter(param));
  }, 300);

  const handleChange = e => {
    const param = e.target.value;
    setSearchTerm(param);
    handleSearch(param);
  };

  return (
    <label>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  );
}
