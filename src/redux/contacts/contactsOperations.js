import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from '../../services/API';

export const fetchContactsAll = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchContacts();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await addContacts({ name, phone });

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await deleteContacts(id);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
