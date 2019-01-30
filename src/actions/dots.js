import { CREATE_DOT, UPDATE_DOT, READ_DOTS, DELETE_DOT } from '../constants';
import uuid from 'uuid';
// CREATE_DOT
export const createDot = ({ title = '', contents = '', media = '', tag = '' }={}) => ({
  type: CREATE_DOT,
  dot: {
    id: uuid(),
    title,
    contents,
    media,
    tag
  }
});

// UPDATE_DOT
export const updateDot = (id, updates) => ({
  type: UPDATE_DOT,
  id,
  updates
});

// READ_DOTS
export const readeDots = (dots) => ({
  type: READ_DOTS,
  payload: dots
});

// DELETE_DOT
export const deleteDot = ({ id }) => ({
  type: DELETE_DOT,
  id
});
