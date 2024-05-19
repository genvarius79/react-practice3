import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    currentTodo: null,
  },
  reducers: {
    addCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addCurrentTodo } = todosSlice.actions;
export const selectCurrentTodo = state => state.todos.currentTodo;
