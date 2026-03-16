import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {asyncToggleUpVoteThread, asyncToggleDownVoteThread}
  from '../states/threads/action';
import VoteButton from './VoteButton';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
  owner,
}) {
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

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength) }...`;
  };

  const onUpVote = () => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDownVote = () => {
    dispatch(asyncToggleDownVoteThread(id));
  };

  return (
    <div className="thread-item">
      <div className="thread-header">
        <div className="thread-category">#{category}</div>
        <div className="thread-date">{formatDate(createdAt)}</div>
      </div>

      <Link to={`/threads/${id}`} className="thread-title-link">
        <h3 className="thread-title">{title}</h3>
      </Link>

      <div className="thread-body" dangerouslySetInnerHTML={{__html: truncateText(body)}} />

      <div className="thread-footer">
        <div className="thread-owner">
          <img
            src={owner.avatar}
            alt={owner.name}
            className="avatar-small"
          />
          <span>{owner.name}</span>
        </div>

        <div className="thread-stats">
          <VoteButton
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
            onUpVote={onUpVote}
            onDownVote={onDownVote}
            size="small"
          />
          <span className="comment-count">💬 {totalComments} komentar</span>
        </div>
      </div>
    </div>
  );
}

export default ThreadItem;
