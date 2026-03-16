import {ActionType} from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId) ?
          threadDetail.upVotesBy.filter((id) => id !== action.payload.userId) :
          threadDetail.upVotesBy.concat([action.payload.userId]),
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId) ?
          threadDetail.downVotesBy.filter((id) =>
            id !== action.payload.userId) :
          threadDetail.downVotesBy,
      };
    case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId) ?
          threadDetail.downVotesBy.filter((id) =>
            id !== action.payload.userId) :
          threadDetail.downVotesBy.concat([action.payload.userId]),
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId) ?
          threadDetail.upVotesBy.filter((id) =>
            id !== action.payload.userId) :
          threadDetail.upVotesBy,
      };
    case ActionType.TOGGLE_UPVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const {upVotesBy, downVotesBy} = comment;
            const {userId} = action.payload;
            const isUpVoted = upVotesBy.includes(userId);
            const isDownVoted = downVotesBy.includes(userId);

            return {
              ...comment,
              upVotesBy: isUpVoted ?
                upVotesBy.filter((id) => id !== userId) :
                upVotesBy.concat([userId]),
              downVotesBy: isDownVoted ?
                downVotesBy.filter((id) => id !== userId) :
                downVotesBy,
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_DOWNVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const {upVotesBy, downVotesBy} = comment;
            const {userId} = action.payload;
            const isUpVoted = upVotesBy.includes(userId);
            const isDownVoted = downVotesBy.includes(userId);

            return {
              ...comment,
              downVotesBy: isDownVoted ?
                downVotesBy.filter((id) => id !== userId) :
                downVotesBy.concat([userId]),
              upVotesBy: isUpVoted ?
                upVotesBy.filter((id) => id !== userId) :
                upVotesBy,
            };
          }
          return comment;
        }),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
