import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo, addCurrentTodo } from 'reduxTodo/todoSlice';

import { useEditTodoMutation } from 'reduxTodo/todosApi';

export const EditForm = () => {
  const [editTodo] = useEditTodoMutation();
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();

  const handleOnCancel = () => {
    dispatch(addCurrentTodo(null));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    try {
      await editTodo({ ...currentTodo, text }).unwrap();
      dispatch(addCurrentTodo(null));
    } catch (error) {
      console.log(error.message);
    }
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={handleOnCancel}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
