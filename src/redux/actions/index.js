// export const add = (user) => ({
//   type: "ADD",
//   payload: user,
// });

// export const del = (id) => ({
//   type: "DELETE",
//   payload: id,
// });

// export const filter = (value) => ({
//   type: "FILTER",
//   payload: value,
// });
import {createAction} from '@reduxjs/toolkit';

export const add = createAction("ADD")
export const del = createAction("DELETE")
export const filter = createAction("FILTER")
