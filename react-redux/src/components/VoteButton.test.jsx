/**
 * skenario pengujian VoteButton component:
 *
 * - VoteButton component
 *   - should render vote counts without buttons when user is not logged in
 *   - should render up vote and down vote buttons when user is logged in
 *   - should render up vote button with 'active' class when user has upvoted
 *   - should render down vote button with 'active' class when user has downvoted
 *   - should call onUpVote when up vote button is clicked
 *   - should call onDownVote when down vote button is clicked
 */

import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import * as reactRedux from 'react-redux';
import VoteButton from './VoteButton';

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
  };
});

describe('VoteButton component', () => {
  it('should render vote counts without buttons when user is not logged in',
    () => {
      vi.mocked(reactRedux.useSelector).mockReturnValue({authUser: null});

      render(
        <VoteButton
          upVotesBy={['user-1', 'user-2']}
          downVotesBy={['user-3']}
          onUpVote={vi.fn()}
          onDownVote={vi.fn()}
        />,
      );

      expect(screen.getByText(/↑ 2/)).toBeInTheDocument();
      expect(screen.getByText(/↓ 1/)).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

  it(
    'should render up vote and down vote buttons when user is logged in',
    () => {
      vi.mocked(reactRedux.useSelector).mockReturnValue({
        authUser: {id: 'user-99'},
      });

      render(
        <VoteButton
          upVotesBy={[]}
          downVotesBy={[]}
          onUpVote={vi.fn()}
          onDownVote={vi.fn()}
        />,
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    },
  );

  it(
    'should render up vote button with active class when user has upvoted',
    () => {
      const userId = 'user-1';
      vi.mocked(reactRedux.useSelector).mockReturnValue({
        authUser: {id: userId},
      });

      render(
        <VoteButton
          upVotesBy={[userId]}
          downVotesBy={[]}
          onUpVote={vi.fn()}
          onDownVote={vi.fn()}
        />,
      );

      const upButton = screen.getByTitle('Up vote');
      expect(upButton.className).toContain('active');
    },
  );

  it(
    'should render down vote button with active class when user has downvoted',
    () => {
      const userId = 'user-1';
      vi.mocked(reactRedux.useSelector).mockReturnValue({
        authUser: {id: userId},
      });

      render(
        <VoteButton
          upVotesBy={[]}
          downVotesBy={[userId]}
          onUpVote={vi.fn()}
          onDownVote={vi.fn()}
        />,
      );

      const downButton = screen.getByTitle('Down vote');
      expect(downButton.className).toContain('active');
    },
  );

  it('should call onUpVote when up vote button is clicked', () => {
    vi.mocked(reactRedux.useSelector).mockReturnValue({
      authUser: {id: 'user-1'},
    });

    const onUpVote = vi.fn();
    render(
      <VoteButton
        upVotesBy={[]}
        downVotesBy={[]}
        onUpVote={onUpVote}
        onDownVote={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByTitle('Up vote'));
    expect(onUpVote).toHaveBeenCalledTimes(1);
  });

  it('should call onDownVote when down vote button is clicked', () => {
    vi.mocked(reactRedux.useSelector).mockReturnValue({
      authUser: {id: 'user-1'},
    });

    const onDownVote = vi.fn();
    render(
      <VoteButton
        upVotesBy={[]}
        downVotesBy={[]}
        onUpVote={vi.fn()}
        onDownVote={onDownVote}
      />,
    );

    fireEvent.click(screen.getByTitle('Down vote'));
    expect(onDownVote).toHaveBeenCalledTimes(1);
  });
});
