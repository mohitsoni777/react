import { LOGIN } from "./constants";

const initialState = 0; // Start with a count of 0

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state =10; // Return a new state with incremented value
    default:
      return state; // For all other actions, return the current state
  }
};
