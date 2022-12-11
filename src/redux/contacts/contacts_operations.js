import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from '../../service/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (info, thunkAPI) => {
    try {
      const response = await addContacts(info);
      console.log(1111111, response);
      Notiflix.Notify.success(`${response.name} successfully added`);
      return response;
    } catch (e) {
      console.log(e);
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContacts(contactId);
      Notiflix.Notify.success(`Контакт видалено ${response.name}`);
      return response;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
