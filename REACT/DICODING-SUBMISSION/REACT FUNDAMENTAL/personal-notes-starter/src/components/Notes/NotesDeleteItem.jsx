import React from 'react';
import PropTypes from 'prop-types';

export default function NotesDeleteItem({ id, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <button 
      className="note-item__delete" 
      onClick={handleDelete}
      title="Hapus catatan"
      aria-label="Hapus catatan"
    >
      Delete
    </button>
  );
}

NotesDeleteItem.propTypes = {
  id: PropTypes.any.isRequired,
  onDelete: PropTypes.func.isRequired,
}