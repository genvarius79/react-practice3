import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { useFetchTodosQuery } from 'reduxTodo/todosApi';

export const TodoList = () => {
  const { data: todos = [] } = useFetchTodosQuery();

  const filter = useSelector(selectFilter);
  const filteredTodos = todos.filter(todo =>
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
