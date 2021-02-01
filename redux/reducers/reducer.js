const initialState = {
  test: "this is a test hahaha",
  user: -1,
  name: "אורח",
  last_name: null,
  address: null,
  ID: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,

        user: action.payload.user,
        name: action.payload.user.attributes.name,
      };
    }
    case "LOGIN_ATTEMPT": {
      return {
        ...state,
        user: 2,
      };
    }
    case "LOGIN_FAIL": {
      return {
        ...state,
        user: "LOGIN_FAILED",
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        user: action.payload.user,
        name: "אורח",
      };
    }
    case "LOGOUT_FAILED": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
export default reducer;
