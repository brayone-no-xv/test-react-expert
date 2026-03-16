import {hideLoading, showLoading} from '@dimasmds/react-redux-loading-bar';
import Api from '../../utils/api';
import {setAuthUserActionCreator} from '../authUser/action';

function asyncRegisterUser({name, email, password}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await Api.register({name, email, password});
    } catch (error) {
      alert(error.message);
      throw error;
    }
    dispatch(hideLoading());
  };
}

function asyncSetAuthUser({email, password}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await Api.login({email, password});
      Api.putAccessToken(token);
      const authUser = await Api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
      throw error;
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(setAuthUserActionCreator(null));
    Api.putAccessToken('');
  };
}

export {
  asyncRegisterUser,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
