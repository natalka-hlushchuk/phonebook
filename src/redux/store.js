import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from '../redux/sliceContacts';
import { filterReducer } from '../redux/sliceFilter';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
