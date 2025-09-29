import React, { useState } from "react";
import PropTypes from "prop-types";

function NotesInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleCharLimit = 50;

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      addNote(title.trim(), body.trim());
      setTitle('');
      setBody('');
    }
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    if (value.length <= titleCharLimit) {
      setTitle(value);
    }
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  
  const remainingChars = titleCharLimit - title.length;
  
  return (
    <div className="note-input-wrapper">
      <h2>Tambah Catatan Baru</h2>
      <form className="note-input" onSubmit={onSubmitEventHandler}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Masukkan judul catatan..."
            value={title}
            onChange={handleTitleChange}
            required
          />
          <small className="char-counter">
            Sisa karakter: {remainingChars}
          </small>
        </div>
        <textarea
          placeholder="Tuliskan isi catatan..."
          value={body}
          onChange={handleBodyChange}
          rows="4"
          required
        />
        <button type="submit" disabled={!title.trim() || !body.trim()}>
          Tambah Catatan
        </button>
      </form>
    </div>
  );
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NotesInput;
