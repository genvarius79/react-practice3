import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter, selectFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = evt => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};
