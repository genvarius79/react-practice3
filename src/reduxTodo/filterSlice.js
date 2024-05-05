import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const selectFilter = state => state.filter.name;
export const { changeFilter } = filterSlice.actions;
