import { Text, GridItem } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentTodo, selectCurrentTodo } from 'reduxTodo/todoSlice';
import { useDeleteTodoMutation } from 'reduxTodo/todosApi';

export const Todo = ({ data, idx }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const handleDelete = async () => {
    try {
      await deleteTodo(data.id).unwrap();
      console.log(`todo ${data.id} was successfully deleted`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = () => {
    dispatch(addCurrentTodo(data));
  };

  const isDisabledDeleteButton = currentTodo && currentTodo.id === data.id;

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
          disabled={isDisabledDeleteButton}
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
