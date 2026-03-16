import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {asyncUnsetAuthUser} from '../states/shared/action';

function Header() {
  const {authUser} = useSelector((state) => state);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Forum App</h1>
        </Link>
        <nav className="nav">
          <Link to="/leaderboard" className="nav-link">
            Leaderboard
          </Link>
          {authUser ? (
            <div className="nav-user">
              <img
                src={authUser.avatar}
                alt={authUser.name}
                className="avatar-small"
              />
              <span>{authUser.name}</span>
              <Link to="/create" className="btn btn-primary">
                Buat Thread
              </Link>
              <button onClick={onLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-auth">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
