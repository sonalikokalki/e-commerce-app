import { type } from "@testing-library/user-event/dist/type";
import { act } from "react-dom/test-utils";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((c) => c.id !== action.payload.id)],
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };

    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDeliver: !state.byFastDeliver };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDeliver: false,
        searchQuery: "",
        byRating: 0,
      };

    default:
      return state;
  }
};
