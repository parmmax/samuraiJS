import React from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interlocutor = (props) => {
    return (
        <div className="mb-1">
           <FontAwesomeIcon icon={faUser} className="" size="2x" />
           <span className="ml-4">{props.name}</span>
        </div>
    )
};

export default Interlocutor