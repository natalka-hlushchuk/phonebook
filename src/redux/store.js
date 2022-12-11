import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth_slice';
import { contactReducer } from './contacts/sliceContacts';
import { filterReducer } from './contacts/sliceFilter';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
//   auth: authReducer,
// });

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   // if you do not want to persist this part of the state
//   blacklist: ['omitedPart']
// };

// const reducer = combineReducers({
//   cart: CartReducer,
//   // not persisting this reducer
//   omitedPart:OmitReducer
// });
// // this ensures your redux state is saved to persisted storage whenever it changes
// // we pass this to the store
// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export default store;
