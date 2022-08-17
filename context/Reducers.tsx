import {
  StateInterface,
  ActionInterface,
  ProductInterface,
} from "../models/product";

export const cartReducer = (state: StateInterface, action: ActionInterface) => {
  const { type, payload } = action;

  let index: number | undefined;
  let newShoppingCart: ProductInterface[];
  let newItem: ProductInterface;

  const getIndex = () => {
    return state.cart.findIndex((item) => item.id === payload);
  };
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload),
      };

    case "CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((product) =>
          product.id === payload.id
            ? (product.qty = parseInt(payload.qty))
            : product.qty
        ),
      };

    default:
      return state;
  }
};

export const productReducer = (
  state: StateInterface,
  action: ActionInterface
) => {
  const { payload, type } = action;

  switch (action.type) {
    case "SORT_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: payload,
      };
    case "SORT_BY_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case "BY_SEARCH":
      return {
        ...state,
        bySearchString: payload,
      };
    case "RESET":
      return {
        byStock: false,
        byFastDelivery: false,
        bySearchString: "",
      };

    default:
      return state;
  }
};
