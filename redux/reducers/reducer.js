const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,

        user: action.payload.user,
      };
    }
    case "LOGIN_FAIL": {
      return {
        ...state,
        user: -1,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
