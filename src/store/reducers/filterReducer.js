const initialState = {};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return { ...state, Query: action.payload };
    default:
      return state;
  }
};
export default filterReducer;
