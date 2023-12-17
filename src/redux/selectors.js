import { createSelector } from '@reduxjs/toolkit';

export const selectToken = state => state.auth.token;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

export const selectName = state => state.auth.name;

export const selectIsLogged = state => state.auth.isLogged;

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectContactsIsLoading = state => state.contacts.isLoading;
