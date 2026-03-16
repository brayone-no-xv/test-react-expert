import {configureStore} from '@reduxjs/toolkit';
import {loadingBarReducer} from '@dimasmds/react-redux-loading-bar';
import authUserReducer from './states/authUser/reducer';
import isPreloadReducer from './states/isPreload/reducer';
import usersReducer from './states/users/reducer';
import threadsReducer from './states/threads/reducer';
import threadDetailReducer from './states/threadDetail/reducer';
import leaderboardsReducer from './states/leaderboards/reducer';

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
});
