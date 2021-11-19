import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contactsAll, value) => {
    const normalizedFilter = value.toLowerCase();

    return contactsAll.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
