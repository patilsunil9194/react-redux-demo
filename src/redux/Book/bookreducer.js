import { BUY_BOOK } from "./bookType";
const intialState = {
  noOfBooks: 10,
  name: "react and redux",
};

const bookReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        noOfBooks: state.noOfBooks - action.qty,
      };
    default:
      return state;
  }
};

export default bookReducer;
