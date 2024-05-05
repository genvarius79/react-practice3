import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.search.value;
    dispatch(addTodo({ text, id: nanoid() }));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
