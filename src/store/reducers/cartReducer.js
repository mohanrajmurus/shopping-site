const initialState = [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, Qty: 1 }];
    case "REMOVE_PRODUCT":
      return state.filter((item) => item.id !== action.payload.id);
    case "INCREASE_QTY":
      return state.map((item) =>
        item.id === action.payload.id
          ? Object.assign({}, item, { Qty: action.payload.Qty + 1 })
          : Object.assign({}, item)
      );
      case "DECREASE_QTY":
        return state.map((item) =>
          item.id === action.payload.id
            ? Object.assign({}, item, { Qty: action.payload.Qty - 1 })
            : Object.assign({}, item)
        );
    default:
      return state;
  }
};

export default cartReducer;
