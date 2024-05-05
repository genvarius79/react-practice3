import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todoList = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filteredTodos = todoList.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <>
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((item, idx) => {
            return <Todo key={item.id} data={item} idx={idx}></Todo>;
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
