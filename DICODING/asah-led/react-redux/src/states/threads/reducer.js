import {ActionType} from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.TOGGLE_UPVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const {upVotesBy, downVotesBy} = thread;
          const {userId} = action.payload;
          const isUpVoted = upVotesBy.includes(userId);
          const isDownVoted = downVotesBy.includes(userId);

          return {
            ...thread,
            upVotesBy: isUpVoted ?
              upVotesBy.filter((id) => id !== userId) :
              upVotesBy.concat([userId]),
            downVotesBy: isDownVoted ?
              downVotesBy.filter((id) => id !== userId) :
              downVotesBy,
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const {upVotesBy, downVotesBy} = thread;
          const {userId} = action.payload;
          const isUpVoted = upVotesBy.includes(userId);
          const isDownVoted = downVotesBy.includes(userId);

          return {
            ...thread,
            downVotesBy: isDownVoted ?
              downVotesBy.filter((id) => id !== userId) :
              downVotesBy.concat([userId]),
            upVotesBy: isUpVoted ?
              upVotesBy.filter((id) => id !== userId) :
              upVotesBy,
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
