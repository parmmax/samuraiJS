import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Nav, Navbar } from 'react-bootstrap';
import PreLoader from '../../common/PreLoader/PreLoader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <PreLoader />
    }

    return (
        <Card className="mb-3 text-center bg-light text-dark border-0 shadow">
            <Card.Body className="my-2">
                {
                    <img src={props.profile.photos.large} alt="user" /> === null
                        ? <img className="mb-3" src={props.profile.photos.small} alt={props.profile.fullName} />
                        : <FontAwesomeIcon className="mb-3 text-primary" icon={faUser} size="4x" />
                }
                <hr />
                <Card.Title className="text-primary text-capitalize">{props.profile.fullName}</Card.Title>
                <hr />
                <Card.Subtitle className="text-left font-weight-light text-primary">
                    {props.profile.aboutMe != null ? props.profile.aboutMe : 'No description "About Me"'}
                </Card.Subtitle>
                <Card.Text className="text-left">
                    <span className="text-primary font-weight-light">
                        Looking for a Job:{' '}
                        <span className="text-muted">
                            {
                                props.profile.lookingForAJob === true
                                    ? ' Yes '
                                    : 'No'
                            }
                        </span>
                    </span><br />
                    <span className="text-primary font-weight-light">
                        Looking for a job description:{' '}
                        <span className="text-muted">
                            {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : 'No'}
                        </span>
                    </span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="font-italic text-primary">
                {/* <a href={props.profile.contacts.facebook} className="mx-1">facebook</a>
                <a href={props.profile.contacts.website} className="mx-1">website</a>
                <a href={props.profile.contacts.vk} className="mx-1">vk</a>
                <a href={props.profile.contacts.twitter} className="mx-1">twitter</a><br/>
                <a href={props.profile.contacts.instagram} className="mx-1">instagram</a>
                <a href={props.profile.contacts.youtube} className="mx-1">youtube</a>
                <a href={props.profile.contacts.github} className="mx-1">github</a>
                <a href={props.profile.contacts.mainLink} className="mx-1">mainLink</a> */}
                <Navbar variant="secondary">
                    <Nav className="mr-auto d-flex flex-column">
                        <Nav.Link href="/messages">Messages</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar>
            </Card.Footer>
        </Card >
    )
};

export default ProfileInfo