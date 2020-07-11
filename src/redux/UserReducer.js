// Not done

const defaultState = {
    jwt: null,
    user: null,
  };
  
  const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'USER_SAVE': {
        return {
          ...state
        };
      }
  
      case 'USER_DELETE': {
        return defaultState;
      }
  
      default:
        return defaultState;
    }
  };
  
  export default UserReducer;