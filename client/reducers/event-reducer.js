//import { SET_CURRENT_USER } from "../actions/types";
import { GET_EVENTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { list: action.payload };

    default:
      return state;
  }
};
