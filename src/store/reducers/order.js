import * as actionTypes from "../actions/actionTypes";

const initalState = {
  orders: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default reducer;
