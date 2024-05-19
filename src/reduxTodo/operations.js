import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const todosAPI = axios.create({
  baseURL: 'https://663f3506e3a7c3218a4c70f2.mockapi.io/',
});

export const fetchTodo = createAsyncThunk(
  'todos/fetchTodo',
  async (_, thunkAPI) => {
    try {
      const response = await todosAPI.get('todos');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo, thunkAPI) => {
    try {
      const response = await todosAPI.post('todos', todo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      await todosAPI.delete(`todos/${todoId}`);
      return todoId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async (todo, thunkAPI) => {
    try {
      const response = await todosAPI.put(`todos/${todo.id}`, todo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
