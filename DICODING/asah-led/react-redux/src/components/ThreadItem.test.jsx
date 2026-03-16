/**
 * skenario pengujian ThreadItem component:
 *
 * - ThreadItem component
 *   - should render thread title as a link
 *   - should render thread category with # prefix
 *   - should render thread owner name
 *   - should render comment count
 *   - should dispatch asyncToggleUpVoteThread on up vote
 *   - should dispatch asyncToggleDownVoteThread on down vote
 */

import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import ThreadItem from './ThreadItem';

vi.mock('../states/threads/action', async () => {
  const actual = await vi.importActual('../states/threads/action');
  return {
    ...actual,
    asyncToggleUpVoteThread: vi.fn(() => ({type: 'MOCK_UP_VOTE'})),
    asyncToggleDownVoteThread: vi.fn(() => ({type: 'MOCK_DOWN_VOTE'})),
  };
});

const fakeThread = {
  id: 'thread-1',
  title: 'Test Thread Title',
  body: 'Test thread body content',
  category: 'general',
  createdAt: '2023-09-01T00:00:00.000Z',
  totalComments: 5,
  upVotesBy: [],
  downVotesBy: [],
  owner: {
    id: 'user-1',
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  },
};

function createStore(authUser = {id: 'user-1', name: 'John Doe'}) {
  return configureStore({
    reducer: {
      authUser: () => authUser,
    },
  });
}

function renderThreadItem(props = {}, authUser = null) {
  const store = createStore(authUser);
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <ThreadItem {...fakeThread} {...props} />
      </MemoryRouter>
    </Provider>,
  );
}

describe('ThreadItem component', () => {
  it('should render thread title as a link', () => {
    renderThreadItem();
    const titleLink = screen.getByRole('link', {name: /Test Thread Title/i});
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', `/threads/${fakeThread.id}`);
  });

  it('should render thread category with # prefix', () => {
    renderThreadItem();
    expect(screen.getByText('#general')).toBeInTheDocument();
  });

  it('should render thread owner name', () => {
    renderThreadItem();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should render comment count', () => {
    renderThreadItem();
    expect(screen.getByText(/5 komentar/i)).toBeInTheDocument();
  });

  it('should dispatch asyncToggleUpVoteThread when up vote button clicked',
    async () => {
      const {asyncToggleUpVoteThread} =
        await import('../states/threads/action');

      renderThreadItem({}, {id: 'user-99'});

      const upButton = screen.getByTitle('Up vote');
      fireEvent.click(upButton);

      expect(asyncToggleUpVoteThread).toHaveBeenCalledWith(fakeThread.id);
    });

  it('should dispatch asyncToggleDownVoteThread when down vote button clicked',
    async () => {
      const {asyncToggleDownVoteThread} =
        await import('../states/threads/action');

      renderThreadItem({}, {id: 'user-99'});

      const downButton = screen.getByTitle('Down vote');
      fireEvent.click(downButton);

      expect(asyncToggleDownVoteThread).toHaveBeenCalledWith(fakeThread.id);
    });
});
