import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReducer,
  },
});
