import { Section, Container, Header, Text, Form, TodoList } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form></Form>
          <Text textAlign="center">Create your first todo😉</Text>
          <TodoList></TodoList>
        </Container>
      </Section>
    </>
  );
};
