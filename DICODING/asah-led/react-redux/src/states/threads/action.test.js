/**
 * skenario pengujian asyncToggleUpVoteThread (threads/action):
 *
 * - asyncToggleUpVoteThread thunk
 *   - should dispatch toggleUpVoteThread and call Api.upVoteThread on success
 *   - should alert and rollback dispatch if Api.upVoteThread fails
 *   - should alert if user is not logged in (authUser is null)
 *
 * - asyncToggleDownVoteThread thunk
 *   - should dispatch toggleDownVoteThread and call Api.downVoteThread on success
 *   - should alert if user is not logged in (authUser is null)
 */

import {describe, it, expect, vi, beforeEach} from 'vitest';
import {
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  ActionType,
} from './action';
import Api from '../../utils/api';

vi.mock('../../utils/api');
vi.stubGlobal('alert', vi.fn());

describe('asyncToggleUpVoteThread thunk', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should dispatch toggleUpVoteThread and call upVoteThread on success',
    async () => {
      Api.upVoteThread = vi.fn().mockResolvedValue(undefined);

      const authUser = {id: 'user-1'};
      const getState = vi.fn().mockReturnValue({authUser});
      const dispatch = vi.fn();
      const thunk = asyncToggleUpVoteThread('thread-1');

      await thunk(dispatch, getState);

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: ActionType.TOGGLE_UPVOTE_THREAD,
          payload: {threadId: 'thread-1', userId: 'user-1'},
        }),
      );
      expect(Api.upVoteThread).toHaveBeenCalledWith('thread-1');
    });

  it('should alert and rollback if Api.upVoteThread fails', async () => {
    const error = new Error('Gagal upvote');
    Api.upVoteThread = vi.fn().mockRejectedValue(error);

    const authUser = {id: 'user-1'};
    const getState = vi.fn().mockReturnValue({authUser});
    const dispatch = vi.fn();
    const thunk = asyncToggleUpVoteThread('thread-1');

    await thunk(dispatch, getState);

    expect(alert).toHaveBeenCalledWith('Gagal upvote');
    // Expect rollback: dispatch called twice with same action
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual(dispatch.mock.calls[1][0]);
  });

  it('should alert if user is not logged in (authUser is null)', async () => {
    const getState = vi.fn().mockReturnValue({authUser: null});
    const dispatch = vi.fn();
    const thunk = asyncToggleUpVoteThread('thread-1');

    await thunk(dispatch, getState);

    expect(alert).toHaveBeenCalledWith('Silakan login terlebih dahulu');
    expect(dispatch).not.toHaveBeenCalled();
  });
});

describe('asyncToggleDownVoteThread thunk', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should dispatch toggleDownVoteThread and call downVoteThread on success',
    async () => {
      Api.downVoteThread = vi.fn().mockResolvedValue(undefined);

      const authUser = {id: 'user-1'};
      const getState = vi.fn().mockReturnValue({authUser});
      const dispatch = vi.fn();
      const thunk = asyncToggleDownVoteThread('thread-1');

      await thunk(dispatch, getState);

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: ActionType.TOGGLE_DOWNVOTE_THREAD,
          payload: {threadId: 'thread-1', userId: 'user-1'},
        }),
      );
      expect(Api.downVoteThread).toHaveBeenCalledWith('thread-1');
    });

  it('should alert if user is not logged in (authUser is null)', async () => {
    const getState = vi.fn().mockReturnValue({authUser: null});
    const dispatch = vi.fn();
    const thunk = asyncToggleDownVoteThread('thread-1');

    await thunk(dispatch, getState);

    expect(alert).toHaveBeenCalledWith('Silakan login terlebih dahulu');
    expect(dispatch).not.toHaveBeenCalled();
  });
});
