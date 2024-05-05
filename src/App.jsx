import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const App = () => {
  const items = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form></Form>
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
