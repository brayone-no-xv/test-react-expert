import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

export default function NotesList({ notes = [], onDelete, onArchive, isArchived }) {   
  if (notes.length === 0) {
    return (
      <div className="note-list-empty">
        <div className="empty-state">
          <h3>Tidak ada catatan</h3>
          <p>{isArchived ? 'Tidak ada catatan yang diarsipkan' : 'Belum ada catatan yang tersimpan'}</p>
        </div>
      </div>
    );
  }
      
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

NotesList.PropTypes = {
  notes: PropTypes.array.isRequired, 
  onDelete:  PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired
}