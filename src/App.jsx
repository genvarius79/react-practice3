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

import { useSelector } from 'react-redux';

import { selectCurrentTodo } from 'reduxTodo/todoSlice';
import { useFetchTodosQuery } from 'reduxTodo/todosApi';

export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);
  const { data: items = [], isFetching } = useFetchTodosQuery();

  console.log(isFetching);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {isFetching && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100dvh',
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '9999',
              }}
            >
              <span style={{ fontSize: 30, color: 'white' }}>LOADING</span>
            </div>
          )}
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
