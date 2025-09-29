import React, { useState } from 'react';
import NotesList from './NotesList';
import NotesInput from './NotesInput';
import { getInitialData } from '../../utils/index';

function NotesApp() {
    const [notes, setNotes] = useState(getInitialData() || []);
    const [searchTerm, setSearchTerm] = useState('');

    const onDeleteHandler = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const onAddNoteHandler = (title, body) => {
        const newNote = {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
        };
        setNotes([...notes, newNote]);
    };

    const onArchiveHandler = (id) => {
        setNotes(notes.map(note => 
            note.id === id ? { ...note, archived: !note.archived } : note
        ));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const clearSearch = () => {
        setSearchTerm('');
    };
    
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);

    return (
        <div className="notes-app">
            <div className="app-header">
                <h1>Aplikasi Catatan</h1>
            </div>
            <NotesInput addNote={onAddNoteHandler} />
            <div className="search-section">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Cari catatan berdasarkan judul atau isi..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {searchTerm && (
                        <button 
                            className="clear-search"
                            onClick={clearSearch}
                            title="Bersihkan pencarian"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
            <div className="notes-section">
                <h2>
                    Catatan Aktif ({activeNotes.length})
                </h2>
                <NotesList 
                    notes={activeNotes} 
                    onDelete={onDeleteHandler}
                    onArchive={onArchiveHandler}
                    isArchived={false}
                />
            </div>
            <div className="notes-section">
                <h2>
                    Arsip ({archivedNotes.length})
                </h2>
                <NotesList 
                    notes={archivedNotes} 
                    onDelete={onDeleteHandler}
                    onArchive={onArchiveHandler}
                    isArchived={true}
                />
            </div>
        </div>
    );
}

export default NotesApp;
