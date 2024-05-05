import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});
export const todosReducer = todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;
export const selectTodos = state => {
  return state.todos.items;
};
