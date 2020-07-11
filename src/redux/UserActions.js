import {store} from '../redux/Store';

// Not done

export const saveUser = (user) => {
  store.dispatch({
    type: 'USER_SAVE',
    payload: {
      user,
    },
  });
};

export const deleteUser = () => {
  store.dispatch({type: 'USER_DELETE'});
};