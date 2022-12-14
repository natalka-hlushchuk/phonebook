export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
