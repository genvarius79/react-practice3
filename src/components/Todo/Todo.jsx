import { Text, GridItem } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addCurrentTodo } from 'reduxTodo/todoSlice';
import { deleteTodo } from 'reduxTodo/operations';

export const Todo = ({ data, idx }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(data.id));
  };

  const handleEdit = () => {
    dispatch(addCurrentTodo(data));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {idx + 1}
        </Text>

        <Text>{data.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button" onClick={handleEdit}>
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
