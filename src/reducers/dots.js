import { CREATE_DOT, READ_DOTS, UPDATE_DOT, DELETE_DOT } from '../constants';

export const defaultDotState = [];
export default (state = defaultDotState, action) => {
  switch(action.type) {
    case CREATE_DOT:
      return {
        ...state,
        dots: [...state.dots, action.payload]
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
          if(dot.id === action.payload.id) {
            return {
              ...dot,
              ...action.payload
            }
          }
          return dot;
        })
      };
    case DELETE_DOT:
      return {
        ...state,
        dots: state.dots.filter(dot => dot.id !== action.payload)
      };
    default:
      return state;
  }
};
