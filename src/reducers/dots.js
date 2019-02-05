import { CREATE_DOT, READ_DOTS, UPDATE_DOT, DELETE_DOT } from '../constants';

export const defaultDotState = [];
export default (state = defaultDotState, action) => {
  switch(action.type) {
    case CREATE_DOT:
      return [
        ...state,
        action.dot
      ];
    case READ_DOTS:
      return action.payload;
    case UPDATE_DOT:
      return state.map(dot => {
        if(dot.id === action.id) {
          return {
            ...dot,
            ...action.updates
          }
        }
        return dot;
      });
    case DELETE_DOT:
      return state.filter(dot => dot.id !== action.id);
    default:
      return state;
  }
};
