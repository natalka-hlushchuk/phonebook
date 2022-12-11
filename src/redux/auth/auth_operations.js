import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, logInUser, logOutUser, registerUser } from 'service/api';
import { token } from 'service/api';

export const register = createAsyncThunk(
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const response = await registerUser(userInfo);
      token.set(response.token);
      return response;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      const response = await logInUser(userInfo);
      token.set(response.token);
      return response;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await logOutUser();
    token.unset();
    console.log(response);
    return response;
  } catch (e) {
    Notiflix.Notify.failure(`Something went wrong ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const persisdedToken = state.auth.token;
    console.log(persisdedToken);
    if (persisdedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persisdedToken);
    try {
      const response = await getUser();
      console.log(response);
      return response;
    } catch (e) {
      Notiflix.Notify.failure(`Something went wrong ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
