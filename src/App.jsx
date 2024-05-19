import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from 'reduxTodo/operations';
import { selectCurrentTodo, selectTodos } from 'reduxTodo/todoSlice';

export const App = () => {
  const items = useSelector(selectTodos);
  const isEdit = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter></Filter>
          {items.length > 0 ? (
            <TodoList></TodoList>
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
