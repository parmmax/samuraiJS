import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from "react-router-dom";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interlocutor = (props) => {
    let path = "/messages/" + props.id;
    return (
        <Navbar className="" >
            <Nav className="mr-auto">
                <Nav.Link href={path} className="">
                    <FontAwesomeIcon icon={faUser} className="" size="2x" />
                    <span className="ml-4">{props.name}</span>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default Interlocutor