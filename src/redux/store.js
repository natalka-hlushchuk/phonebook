import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from '../redux/sliceContacts';
import { filterReducer } from '../redux/sliceFilter';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedContactReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
