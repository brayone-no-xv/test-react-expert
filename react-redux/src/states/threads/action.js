import {hideLoading, showLoading} from '@dimasmds/react-redux-loading-bar';
import Api from '../../utils/api';
import {receiveUsersActionCreator} from '../users/action';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await Api.getAllUsers();
      const threads = await Api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddThread({title, body, category}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await Api.createThread({title, body, category});
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function toggleUpVoteThreadActionCreator({threadId, userId}) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadActionCreator({threadId, userId}) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const {authUser} = getState();

    if (!authUser) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    dispatch(toggleUpVoteThreadActionCreator({threadId, userId: authUser.id}));

    try {
      await Api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadActionCreator({
        threadId,
        userId: authUser.id,
      }));
    }
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const {authUser} = getState();

    if (!authUser) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    dispatch(toggleDownVoteThreadActionCreator({
      threadId,
      userId: authUser.id,
    }));

    try {
      await Api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteThreadActionCreator({
        threadId,
        userId: authUser.id,
      }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  asyncPopulateUsersAndThreads,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
};
