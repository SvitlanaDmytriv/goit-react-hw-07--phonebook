import { createReducer, createSlice } from '@reduxjs/toolkit';

import { changeFilter } from './contactsAction';

import {
  fetchContactsAll,
  addContact,
  deleteContact,
} from './contactsOperations';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const initialStateContacts = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  extraReducers: {
    [fetchContactsAll.pending]: (state, _) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContactsAll.fulfilled]: (state, action) => ({
      ...state,
      items: [...state.items, ...action.payload],
      loading: false,
      error: null,
    }),
    [fetchContactsAll.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [addContact.pending]: (state, _) => ({ ...state, loading: true }),
    [addContact.fulfilled]: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
      loading: false,
      error: null,
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),

    [deleteContact.pending]: (state, _) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.fulfilled]: (state, action) => ({
      ...state,
      items: state.items.filter(item => item.id !== action.payload.id),
      loading: false,
      error: null,
    }),
    [deleteContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export default contactsSlice.reducer;
