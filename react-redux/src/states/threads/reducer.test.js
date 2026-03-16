/**
 * skenario pengujian threadsReducer:
 *
 * - threadsReducer function
 *   - should return initial state when given unknown action
 *   - should return threads when given RECEIVE_THREADS action
 *   - should add thread to the beginning when given ADD_THREAD action
 *   - should toggle upvote thread when user has not upvoted
 *   - should untoggle upvote thread when user has already upvoted
 *   - should toggle downvote thread when user has not downvoted
 *   - should untoggle downvote thread when user has already downvoted
 *   - should remove upvote when downvoting an upvoted thread
 */

import {describe, it, expect} from 'vitest';
import threadsReducer from './reducer';
import {ActionType} from './action';

const fakeThread = {
  id: 'thread-1',
  title: 'Test Thread',
  body: 'Body',
  category: 'general',
  createdAt: '2023-01-01',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  user: 'user-1',
};

describe('threadsReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const state = threadsReducer(undefined, {type: 'UNKNOWN'});
    expect(state).toEqual([]);
  });

  it('should return threads when given RECEIVE_THREADS action', () => {
    const threads = [fakeThread];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {threads},
    };
    const state = threadsReducer([], action);
    expect(state).toEqual(threads);
  });

  it('should add thread to the beginning when given ADD_THREAD action', () => {
    const existingThread = {...fakeThread, id: 'thread-0'};
    const newThread = {...fakeThread, id: 'thread-1'};
    const action = {
      type: ActionType.ADD_THREAD,
      payload: {thread: newThread},
    };
    const state = threadsReducer([existingThread], action);
    expect(state[0]).toEqual(newThread);
    expect(state).toHaveLength(2);
  });

  it('should toggle upvote thread when user has not upvoted', () => {
    const userId = 'user-1';
    const thread = {...fakeThread, upVotesBy: [], downVotesBy: []};
    const action = {
      type: ActionType.TOGGLE_UPVOTE_THREAD,
      payload: {threadId: thread.id, userId},
    };
    const state = threadsReducer([thread], action);
    expect(state[0].upVotesBy).toContain(userId);
  });

  it('should untoggle upvote thread when user has already upvoted', () => {
    const userId = 'user-1';
    const thread = {...fakeThread, upVotesBy: [userId], downVotesBy: []};
    const action = {
      type: ActionType.TOGGLE_UPVOTE_THREAD,
      payload: {threadId: thread.id, userId},
    };
    const state = threadsReducer([thread], action);
    expect(state[0].upVotesBy).not.toContain(userId);
  });

  it('should toggle downvote thread when user has not downvoted', () => {
    const userId = 'user-1';
    const thread = {...fakeThread, upVotesBy: [], downVotesBy: []};
    const action = {
      type: ActionType.TOGGLE_DOWNVOTE_THREAD,
      payload: {threadId: thread.id, userId},
    };
    const state = threadsReducer([thread], action);
    expect(state[0].downVotesBy).toContain(userId);
  });

  it('should untoggle downvote thread when user has already downvoted', () => {
    const userId = 'user-1';
    const thread = {
      ...fakeThread,
      upVotesBy: [],
      downVotesBy: [userId],
    };
    const action = {
      type: ActionType.TOGGLE_DOWNVOTE_THREAD,
      payload: {threadId: thread.id, userId},
    };
    const state = threadsReducer([thread], action);
    expect(state[0].downVotesBy).not.toContain(userId);
  });

  it('should remove upvote when downvoting an upvoted thread', () => {
    const userId = 'user-1';
    const thread = {
      ...fakeThread,
      upVotesBy: [userId],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_DOWNVOTE_THREAD,
      payload: {threadId: thread.id, userId},
    };
    const state = threadsReducer([thread], action);
    expect(state[0].downVotesBy).toContain(userId);
    expect(state[0].upVotesBy).not.toContain(userId);
  });
});
