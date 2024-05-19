import { createSlice } from '@reduxjs/toolkit';
import { fetchTodo, addTodo, deleteTodo, editTodo } from './operations';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          todo => todo.id === action.payload.id,
        );
        state.items.splice(index, 1, action.payload);
        state.currentTodo = null;
      }),
});

export const todosReducer = todosSlice.reducer;
export const { addCurrentTodo } = todosSlice.actions;
export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;
