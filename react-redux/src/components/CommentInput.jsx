import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {asyncAddComment} from '../states/threadDetail/action';

function CommentInput({threadId}) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const {authUser} = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(asyncAddComment({content, threadId}));
      setContent('');
    }
  };

  if (!authUser) {
    return (
      <div className="comment-input-wrapper">
        <p className="login-prompt">
          Silakan login untuk menambahkan komentar.
        </p>
      </div>
    );
  }

  return (
    <div className="comment-input-wrapper">
      <h3>Beri Komentar</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tulis komentar Anda..."
          className="comment-textarea"
          rows="4"
          required
        />
        <button type="submit" className="btn btn-primary">
          Kirim Komentar
        </button>
      </form>
    </div>
  );
}

export default CommentInput;
