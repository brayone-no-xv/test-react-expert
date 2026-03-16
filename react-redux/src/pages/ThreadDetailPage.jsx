import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {asyncReceiveThreadDetail, asyncToggleUpVoteThreadDetail, asyncToggleDownVoteThreadDetail} from '../states/threadDetail/action';
import VoteButton from '../components/VoteButton';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';

function ThreadDetailPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {threadDetail} = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

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
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onDownVote = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  if (!threadDetail) {
    return (
      <div className="container">
        <div className="loading-state">
          <p>Memuat thread...</p>
        </div>
      </div>
    );
  }

  const {
    title,
    body,
    category,
    createdAt,
    owner,
    comments = [],
    upVotesBy = [],
    downVotesBy = [],
  } = threadDetail || {};

  return (
    <div className="thread-detail-page">
      <div className="container">
        <div className="thread-detail">
          <div className="thread-detail-header">
            <div className="thread-category">#{category}</div>
            <div className="thread-date">{formatDate(createdAt)}</div>
          </div>

          <h1 className="thread-detail-title">{title}</h1>

          <div className="thread-detail-owner">
            {owner && (
              <>
                <img
                  src={owner.avatar}
                  alt={owner.name}
                  className="avatar-medium"
                />
                <div className="owner-info">
                  <span className="owner-name">{owner.name}</span>
                </div>
              </>
            )}
          </div>

          <div
            className="thread-detail-body"
            dangerouslySetInnerHTML={{__html: body}}
          />

          <div className="thread-detail-actions">
            <VoteButton
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
              onUpVote={onUpVote}
              onDownVote={onDownVote}
              size="large"
            />
          </div>
        </div>

        <div className="comments-section">
          <h3>Komentar ({comments.length})</h3>

          <CommentInput threadId={id} />

          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentItem key={comment.id} {...comment} />
              ))
            ) : (
              <div className="empty-comments">
                <p>Belum ada komentar. Jadilah yang pertama berkomentar!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadDetailPage;
