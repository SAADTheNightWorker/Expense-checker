export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transations: state.transations.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transations: [action.payload, ...state.transations],
      };
    default:
      return state;
  }
};
