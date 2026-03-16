import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {asyncReceiveLeaderboards} from '../states/leaderboards/action';

function LeaderboardPage() {
  const dispatch = useDispatch();
  const {leaderboards = []} = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <div className="leaderboard-page">
      <div className="container">
        <h2>Leaderboard</h2>
        <p>Pengguna dengan aktivitas terbaik</p>

        <div className="leaderboard-list">
          {leaderboards.length === 0 ? (
            <div className="empty-state">
              <p>Belum ada data leaderboard.</p>
            </div>
          ) : (
            leaderboards.map((user, index) => (
              <div key={user.user.id} className="leaderboard-item">
                <div className="leaderboard-rank">
                  <span className={`rank rank-${index + 1}`}>
                    #{index + 1}
                  </span>
                </div>

                <div className="leaderboard-user">
                  <img
                    src={user.user.avatar}
                    alt={user.user.name}
                    className="avatar-medium"
                  />
                  <div className="user-info">
                    <span className="user-name">{user.user.name}</span>
                    <span className="user-email">{user.user.email}</span>
                  </div>
                </div>

                <div className="leaderboard-score">
                  <span className="score">{user.score}</span>
                  <span className="score-label">poin</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;
