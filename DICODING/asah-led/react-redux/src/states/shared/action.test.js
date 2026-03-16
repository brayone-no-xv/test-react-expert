/**
 * skenario pengujian asyncSetAuthUser (shared/action):
 *
 * - asyncSetAuthUser thunk
 *   - should dispatch setAuthUserActionCreator when login succeeds
 *   - should call Api.putAccessToken with the token when login succeeds
 *   - should throw and call alert when login fails
 *
 * - asyncUnsetAuthUser thunk
 *   - should dispatch setAuthUserActionCreator(null) and clear token
 */

import {describe, it, expect, vi, beforeEach} from 'vitest';
import {asyncSetAuthUser, asyncUnsetAuthUser} from './action';
import {ActionType} from '../authUser/action';
import Api from '../../utils/api';

vi.mock('../../utils/api');
vi.stubGlobal('alert', vi.fn());

const fakeAuthUser = {
  id: 'user-1',
  name: 'User One',
  email: 'user@test.com',
  avatar: '',
};

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should dispatch setAuthUserActionCreator on login success', async () => {
    Api.login = vi.fn().mockResolvedValue('fake-token');
    Api.putAccessToken = vi.fn();
    Api.getOwnProfile = vi.fn().mockResolvedValue(fakeAuthUser);

    const dispatch = vi.fn();
    const thunk = asyncSetAuthUser({
      email: 'user@test.com',
      password: 'secret',
    });

    await thunk(dispatch);

    expect(Api.login).toHaveBeenCalledWith({
      email: 'user@test.com',
      password: 'secret',
    });
    expect(Api.putAccessToken).toHaveBeenCalledWith('fake-token');
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: ActionType.SET_AUTH_USER,
        payload: {authUser: fakeAuthUser},
      }),
    );
  });

  it('should throw error and call alert when login fails', async () => {
    const error = new Error('Email atau password salah');
    Api.login = vi.fn().mockRejectedValue(error);

    const dispatch = vi.fn();
    const thunk = asyncSetAuthUser({
      email: 'wrong@test.com',
      password: 'wrong',
    });

    await expect(thunk(dispatch)).rejects.toThrow('Email atau password salah');
    expect(alert).toHaveBeenCalledWith('Email atau password salah');
  });

  it('should not dispatch SET_AUTH_USER on login failure', async () => {
    Api.login = vi.fn().mockRejectedValue(new Error('fail'));

    const dispatch = vi.fn();
    const thunk = asyncSetAuthUser({email: 'x', password: 'y'});

    try {
      await thunk(dispatch);
    } catch {
      // expected
    }

    const calls = dispatch.mock.calls.map((c) => c[0]);
    const setAuthCall = calls.find(
      (a) => a && a.type === ActionType.SET_AUTH_USER,
    );
    expect(setAuthCall).toBeUndefined();
  });
});

describe('asyncUnsetAuthUser thunk', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should dispatch setAuthUserActionCreator(null) and clear token', () => {
    Api.putAccessToken = vi.fn();

    const dispatch = vi.fn();
    const thunk = asyncUnsetAuthUser();

    thunk(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: ActionType.SET_AUTH_USER,
        payload: {authUser: null},
      }),
    );
    expect(Api.putAccessToken).toHaveBeenCalledWith('');
  });
});
