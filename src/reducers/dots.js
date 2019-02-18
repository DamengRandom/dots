import { CREATE_DOT, READ_DOTS, UPDATE_DOT, DELETE_DOT } from '../constants';

export const defaultDotState = [];
export default (state = defaultDotState, action) => {
  switch(action.type) {
    case CREATE_DOT:
      console.log(action);
      return {
        ...state,
        dots: [...state.dots, action.dot]
      };
    case READ_DOTS:
      return {
        ...state,
        dots: action.payload
      };
    case UPDATE_DOT:
      return {
        ...state,
        dots: state.dots.map(dot => {
          if(dot.id === action.updates.id) {
            return {
              ...dot,
              ...action.updates
            }
          }
          return dot;
        })
      };
    case DELETE_DOT:
      return {
        ...state,
        dots: state.dots.filter(dot => dot.id !== action.id)
      };
    default:
      return state;
  }
};
