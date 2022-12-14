import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
  changeContacts,
} from '../../service/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response.data;
    } catch (e) {
      const notify = () => toast.error(`Something went wrong ${e.message}`);
      notify();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (info, thunkAPI) => {
    try {
      const response = await addContacts(info);
      const notify = () => toast(`${response.name} successfully added`);
      notify();
      return response;
    } catch (e) {
      const notify = () => toast.error(`Something went wrong ${e.message}`);
      notify();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContacts(contactId);
      const notify = () => toast(`Contact deleted ${response.name}`);
      notify();
      return response;
    } catch (e) {
      const notify = () => toast.error(`Something went wrong ${e.message}`);
      notify();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const response = await changeContacts(contactId, { name, number });
      const notify = () => toast(`Contact changed on ${response.name}`);
      notify();
      return response;
    } catch (e) {
      const notify = () => toast.error(`Something went wrong ${e.message}`);
      notify();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
