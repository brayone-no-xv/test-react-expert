import React from 'react';
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';

function NotesItemBody({ title, body, createdAt }) {
    const sayHello = ({name}) => {
        return <p>Hello, {name}</p>;
    }
    
    sayHello.propTypes = {
      name: PropTypes.string.isRequired
    };

    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <p className="note-item__content">{body}</p>
        </div>
        
    );
}

NotesItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NotesItemBody;
