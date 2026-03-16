/**
 * skenario pengujian threadDetailReducer:
 *
 * - threadDetailReducer function
 *   - should return initial state (null) when given unknown action
 *   - should return thread detail when given RECEIVE_THREAD_DETAIL action
 *   - should return null when given CLEAR_THREAD_DETAIL action
 *   - should add comment to the beginning when given ADD_COMMENT action
 *   - should toggle upvote thread detail when user has not upvoted
 *   - should untoggle upvote thread detail when user has already upvoted
 *   - should toggle downvote thread detail when user has not downvoted
 *   - should remove upvote when downvoting an upvoted thread detail
 */

import {describe, it, expect} from 'vitest';
import threadDetailReducer from './reducer';
import {ActionType} from './action';

const fakeThreadDetail = {
  id: 'thread-1',
  title: 'Test Thread Detail',
  body: 'Thread body',
  category: 'general',
  createdAt: '2023-01-01',
  owner: {id: 'user-1', name: 'User One', avatar: ''},
  upVotesBy: [],
  downVotesBy: [],
  comments: [],
};

const fakeComment = {
  id: 'comment-1',
  content: 'Test comment',
  createdAt: '2023-01-01',
  owner: {id: 'user-2', name: 'User Two', avatar: ''},
  upVotesBy: [],
  downVotesBy: [],
};

describe('threadDetailReducer function', () => {
  it('should return initial state (null) when given unknown action', () => {
    const state = threadDetailReducer(undefined, {type: 'UNKNOWN'});
    expect(state).toBeNull();
  });

  it('should return thread detail when given RECEIVE_THREAD_DETAIL', () => {
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {threadDetail: fakeThreadDetail},
    };
    const state = threadDetailReducer(null, action);
    expect(state).toEqual(fakeThreadDetail);
  });

  it('should return null when given CLEAR_THREAD_DETAIL action', () => {
    const action = {type: ActionType.CLEAR_THREAD_DETAIL};
    const state = threadDetailReducer(fakeThreadDetail, action);
    expect(state).toBeNull();
  });

  it('should add comment to the beginning when given ADD_COMMENT', () => {
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {comment: fakeComment},
    };
    const state = threadDetailReducer(fakeThreadDetail, action);
    expect(state.comments[0]).toEqual(fakeComment);
    expect(state.comments).toHaveLength(1);
  });

  it('should toggle upvote when user has not yet upvoted', () => {
    const userId = 'user-2';
    const action = {
      type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
      payload: {userId},
    };
    const state = threadDetailReducer(fakeThreadDetail, action);
    expect(state.upVotesBy).toContain(userId);
  });

  it('should untoggle upvote when user has already upvoted', () => {
    const userId = 'user-2';
    const threadWithUpvote = {
      ...fakeThreadDetail,
      upVotesBy: [userId],
    };
    const action = {
      type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
      payload: {userId},
    };
    const state = threadDetailReducer(threadWithUpvote, action);
    expect(state.upVotesBy).not.toContain(userId);
  });

  it('should toggle downvote when user has not yet downvoted', () => {
    const userId = 'user-2';
    const action = {
      type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
      payload: {userId},
    };
    const state = threadDetailReducer(fakeThreadDetail, action);
    expect(state.downVotesBy).toContain(userId);
  });

  it('should remove upvote when downvoting an already upvoted thread', () => {
    const userId = 'user-2';
    const threadWithUpvote = {
      ...fakeThreadDetail,
      upVotesBy: [userId],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
      payload: {userId},
    };
    const state = threadDetailReducer(threadWithUpvote, action);
    expect(state.downVotesBy).toContain(userId);
    expect(state.upVotesBy).not.toContain(userId);
  });
});
