import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// export const addContact = createAction('contact/add', (name, number) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name: name,
//       number: number,
//     },
//   };
// });

// export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/filter');
