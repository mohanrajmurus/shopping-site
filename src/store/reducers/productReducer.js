const initialState = [];
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
