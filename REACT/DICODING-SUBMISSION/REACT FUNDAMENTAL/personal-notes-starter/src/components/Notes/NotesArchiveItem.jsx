import React from 'react';
import PropTypes from 'prop-types';

export default function NotesArchiveItem({ id, onArchive, archived }) {
    return (
        <button 
            className="note-archive" 
            onClick={() => onArchive(id)}
            title={archived ? "Pindahkan ke catatan aktif" : "Arsipkan catatan"}
        >
            {archived ? "Pindahkan" : "Arsipkan"}
        </button>
    );
}

NotesArchiveItem.propTypes = {
    id: PropTypes.any.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired
}