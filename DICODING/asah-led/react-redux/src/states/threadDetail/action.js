import {hideLoading, showLoading} from '@dimasmds/react-redux-loading-bar';
import Api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await Api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({content, threadId}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await Api.createComment({threadId, content});
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function toggleUpVoteThreadDetailActionCreator({userId}) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator({userId}) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleUpVoteCommentActionCreator({commentId, userId}) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentActionCreator({commentId, userId}) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const {authUser, threadDetail} = getState();

    if (!authUser || !threadDetail) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    dispatch(toggleUpVoteThreadDetailActionCreator({userId: authUser.id}));

    try {
      await Api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadDetailActionCreator({userId: authUser.id}));
    }
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const {authUser, threadDetail} = getState();

    if (!authUser || !threadDetail) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    dispatch(toggleDownVoteThreadDetailActionCreator({userId: authUser.id}));

    try {
      await Api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteThreadDetailActionCreator({userId: authUser.id}));
    }
  };
}

function asyncToggleUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const {authUser, threadDetail} = getState();

    if (!authUser || !threadDetail) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    dispatch(toggleUpVoteCommentActionCreator({
      commentId,
      userId: authUser.id,
    }));

    try {
      await Api.upVoteComment({threadId: threadDetail.id, commentId});
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteCommentActionCreator({
        commentId,
        userId: authUser.id,
      }));
    }
  };
}

function asyncToggleDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const {authUser, threadDetail} = getState();

    if (!authUser || !threadDetail) {
      alert('Silakan login terlebih dahulu');
      return;
    }

    dispatch(toggleDownVoteCommentActionCreator({
      commentId,
      userId: authUser.id,
    }));

    try {
      await Api.downVoteComment({threadId: threadDetail.id, commentId});
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteCommentActionCreator({
        commentId,
        userId: authUser.id,
      }));
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
};
