import { FETCH_DATA, UPDATE_NUMBER, SET_ERROR } from "../actions";

const initialState = {
  number: "",
  isFetchingData: false,
  error: ""
};

export const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        number: ""
      };
    case UPDATE_NUMBER:
      return {
        ...state,
        number: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
