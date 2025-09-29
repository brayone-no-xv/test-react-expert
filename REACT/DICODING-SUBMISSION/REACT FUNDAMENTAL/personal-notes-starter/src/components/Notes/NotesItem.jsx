import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesDeleteItem from './NotesDeleteItem';
import NotesArchiveItem from './NotesArchiveItem';
import PropTypes from 'prop-types';

export default function NotesItem({ title, body, createdAt, id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            <NotesItemBody title={title} body={body} createdAt={createdAt} />
            <div className="note-actions">
                <NotesArchiveItem 
                    id={id} 
                    onArchive={onArchive} 
                    archived={archived} 
                />
                <NotesDeleteItem id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

NotesItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.any.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

