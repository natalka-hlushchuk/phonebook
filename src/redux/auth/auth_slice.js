import { createSlice } from '@reduxjs/toolkit';

import { currentUser, logIn, logOut, register } from './auth_operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      // .addCase(register.pending, (state, _) => {
      //   state.contacts.isLoading = true;
      //   state.contacts.error = '';
      // })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});
export const authReducer = authSlice.reducer;
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })

//       .addCase(addContact.pending, (state, _) => {
//         state.contacts.isLoading = true;
//         state.contacts.error = '';
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })

//       .addCase(deleteContact.pending, (state, _) => {
//         state.contacts.isLoading = true;
//         state.contacts.error = '';
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(
//           cont => cont.id !== action.payload.id
//         );
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       });
//   },
