import uuid from 'uuid';
import { CREATE_DOT, UPDATE_DOT, READ_DOTS, DELETE_DOT } from '../constants';
import { saveDot, fetchDots, replaceDot, removeDot } from '../apis/dots';

// // CREATE_DOT
// export const createDot = ({ cost = '', date = '', dot = '', tag = '' }={}) => ({
//   type: CREATE_DOT,
//   dot: {
//     id: uuid(),
//     cost,
//     date,
//     dot,
//     tag
//   }
// });

// // UPDATE_DOT
// export const updateDot = (id, updates) => ({
//   type: UPDATE_DOT,
//   id,
//   updates
// });

// // READ_DOTS
// export const readeDots = (dots) => ({
//   type: READ_DOTS,
//   payload: dots
// });

// // DELETE_DOT
// export const deleteDot = ({ id }) => ({
//   type: DELETE_DOT,
//   id
// });

// CREATE_DOT action
const createDotAction = (dot) => ({
  type: CREATE_DOT,
  payload: dot
});

// UPDATE_DOT action
const updateDotAction = (updates) => ({
  type: UPDATE_DOT,
  payload: updates
});

// READ_DOTS action
const readDotsAction = (dots) => ({
  type: READ_DOTS,
  payload: dots
});

// DELETE_DOT action
const deleteDotAction = ({ id }) => ({
  type: DELETE_DOT,
  payload: id
});

// action creators (CRUD)
export const createDot = (dot) => {
  let dotObject = {
    id: uuid(),
    cost: dot.cost,
    date: dot.date,
    dot: dot.dot,
    tag: dot.tag
  }
  return dispatch =>
    saveDot(dotObject).then(res => dispatch(createDotAction(res)));
}

export const readDots = () => {
  return dispatch =>
    fetchDots().then(res => console.log('res', res) || dispatch(readDotsAction(res)));
}

export const updateDot = (updates) => {
  return dispatch =>
    replaceDot(updates).then(res => dispatch(updateDotAction(res)));
}

export const deleteDot = (id) => {
  return dispatch =>
    removeDot(id).then(() => dispatch(deleteDotAction(id)));
}
