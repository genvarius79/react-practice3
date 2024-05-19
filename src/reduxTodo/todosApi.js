import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todo'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://663f3506e3a7c3218a4c70f2.mockapi.io/',
  }),
  endpoints: builder => {
    return {
      fetchTodos: builder.query({
        query: () => '/todos',
        providesTags: ['Todo'],
      }),
      addTodo: builder.mutation({
        query: newTodo => ({
          url: '/todos',
          method: 'POST',
          body: newTodo,
        }),
        invalidatesTags: ['Todo'],
      }),
      deleteTodo: builder.mutation({
        query: todoId => ({
          url: `/todos/${todoId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Todo'],
      }),
      editTodo: builder.mutation({
        query: todo => ({
          url: `/todos/${todo.id}`,
          method: 'PUT',
          body: todo,
        }),
        invalidatesTags: ['Todo'],
      }),
    };
  },
});

export const {
  useFetchTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = todosApi;
