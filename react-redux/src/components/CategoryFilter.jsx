import {useMemo} from 'react';
import {useSelector} from 'react-redux';

function CategoryFilter({selectedCategory, onCategoryChange}) {
  const {threads} = useSelector((state) => state);

  const categories = useMemo(() => {
    return [...new Set(
      threads.map((thread) => thread.category).filter(Boolean),
    )];
  }, [threads]);

  return (
    <div className="category-filter">
      <label htmlFor="category-select">Filter berdasarkan kategori:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-select"
      >
        <option value="">Semua Kategori</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            #{category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
