import {useDispatch} from 'react-redux';
import {asyncToggleUpVoteComment, asyncToggleDownVoteComment}
  from '../states/threadDetail/action';
import VoteButton from './VoteButton';

function CommentItem({id, content, createdAt, upVotesBy, downVotesBy, owner}) {
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const onUpVote = () => {
    dispatch(asyncToggleUpVoteComment(id));
  };

  const onDownVote = () => {
    dispatch(asyncToggleDownVoteComment(id));
  };

  return (
    <div className="comment-item">
      <div className="comment-header">
        <div className="comment-owner">
          <img
            src={owner.avatar}
            alt={owner.name}
            className="avatar-small"
          />
          <span className="owner-name">{owner.name}</span>
        </div>
        <div className="comment-date">{formatDate(createdAt)}</div>
      </div>
      <div className="comment-content" dangerouslySetInnerHTML={{__html: content}} />
      <div className="comment-actions">
        <VoteButton
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          size="small"
        />
      </div>
    </div>
  );
}

export default CommentItem;
