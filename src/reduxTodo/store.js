import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';
import { filterReducer } from './filterSlice';
import { todosApi } from './todosApi';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
