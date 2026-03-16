import {useSelector} from 'react-redux';

function VoteButton({
  upVotesBy,
  downVotesBy,
  onUpVote,
  onDownVote,
  size = 'small',
}) {
  const {authUser} = useSelector((state) => state);

  if (!authUser) {
    return (
      <div className={`vote-buttons vote-buttons-${size}`}>
        <div className="vote-count">
          <span className="up-votes">↑ {upVotesBy.length}</span>
          <span className="down-votes">↓ {downVotesBy.length}</span>
        </div>
      </div>
    );
  }

  const isUpVoted = upVotesBy.includes(authUser.id);
  const isDownVoted = downVotesBy.includes(authUser.id);

  return (
    <div className={`vote-buttons vote-buttons-${size}`}>
      <button
        type="button"
        onClick={onUpVote}
        className={`vote-btn up-vote-btn ${isUpVoted ? 'active' : ''}`}
        title="Up vote"
      >
        ↑ {upVotesBy.length}
      </button>
      <button
        type="button"
        onClick={onDownVote}
        className={`vote-btn down-vote-btn ${isDownVoted ? 'active' : ''}`}
        title="Down vote"
      >
        ↓ {downVotesBy.length}
      </button>
    </div>
  );
}

export default VoteButton;
