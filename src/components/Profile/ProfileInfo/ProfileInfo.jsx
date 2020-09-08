import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

const ProfileInfo = (props) => {
    return (
        <Card className="my-3 text-center bg-light text-dark border-0 shadow">
            <Card.Body className="my-2">
                <FontAwesomeIcon className="mb-3" icon={faUser} size="4x" />
                <Card.Title className="text-primary">Maxim Parmakliy</Card.Title>
                <Card.Subtitle className="font-weight-light text-info">Republic of JavaScript</Card.Subtitle>
            </Card.Body>
            <Card.Text className="">
                <blockquote className="blockquote mb-2">
                    <footer className="blockquote-footer ">
                        Hi! I'm Junior Front-end Web-developer on <cite title="Source Title">React-Redux</cite>
                    </footer>
                </blockquote>
            </Card.Text>
        </Card >
    )
};

export default ProfileInfo