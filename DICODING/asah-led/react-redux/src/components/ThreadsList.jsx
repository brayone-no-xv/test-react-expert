import {useState} from 'react';
import {useSelector} from 'react-redux';
import CategoryFilter from './CategoryFilter';
import ThreadItem from './ThreadItem';

function ThreadsList() {
  const {threads = [], users = []} = useSelector((state) => state);
  const [selectedCategory, setSelectedCategory] = useState('');

  const threadsWithOwner = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId) || {
      id: 'unknown',
      name: 'Unknown User',
      avatar: 'https://via.placeholder.com/32',
    },
  }));

  const filteredThreads = selectedCategory ?
    threadsWithOwner.filter((thread) => thread.category === selectedCategory) :
    threadsWithOwner;

  if (threads.length === 0) {
    return (
      <div className="empty-state">
        <h3>Belum ada thread</h3>
        <p>Jadilah yang pertama membuat thread!</p>
      </div>
    );
  }

  return (
    <div className="threads-container">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="threads-list">
        {filteredThreads.length === 0 ? (
          <div className="empty-state">
            <h3>Tidak ada thread dalam kategori ini</h3>
            <p>Coba pilih kategori lain atau hapus filter.</p>
          </div>
        ) : (
          filteredThreads.map((thread) => (
            <ThreadItem key={thread.id} {...thread} />
          ))
        )}
      </div>
    </div>
  );
}

export default ThreadsList;
