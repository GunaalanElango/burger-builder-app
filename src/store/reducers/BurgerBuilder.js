import * as actionTypes from "../actions/actionTypes";

let INGREDIENT_PRICES = {
  salad: 10,
  meat: 20,
  cheese: 5,
  bacon: 5,
};


const initalState = {
  ingredients: {
    bacon: 0,
    cheese: 0,
    meat: 0,
    salad: 0,
  },
  totalPrice: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
          totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        },
      };
    default:
      return state;
  }
};

export default reducer;
