import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  };
});

export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/filter');

// Redux
// import shortid from 'shortid';
//
// import types from '../types'

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id:shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = (Id) => ({
//   type: types.DELETE,
//   payload: Id,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
