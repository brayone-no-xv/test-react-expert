import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {asyncPopulateUsersAndThreads} from '../states/threads/action';
import ThreadsList from '../components/ThreadsList';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <div className="home-page">
      <div className="container">
        <h2>Diskusi Terbaru</h2>
        <ThreadsList />
      </div>
    </div>
  );
}

export default HomePage;
