import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todoList = useSelector(selectTodos);

  return (
    <>
      <Grid>
        {todoList.map((item, idx) => {
          return <Todo key={item.id} data={item} idx={idx}></Todo>;
        })}
      </Grid>
      <Text textAlign="center">We did not find any todo😯</Text>
    </>
  );
};
