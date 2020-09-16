import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
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
                        ? <img src={props.profile.photos.small} alt={props.profile.fullName} />
                        : <FontAwesomeIcon icon={faUser} className="text-primary mb-3" size="4x" />
                }
                <hr />
                <Card.Title className="text-primary text-capitalize">{props.profile.fullName}</Card.Title>
                <Card.Subtitle>
                    {/* User id: {props.profile.userId} */}
                </Card.Subtitle>
                <hr />
                <Card.Text className="text-left">
                    <small>
                        About Me:
                        <span className="text-muted">
                            {props.profile.aboutMe != null ? props.profile.aboutMe : ' No description'}
                        </span>
                        <br />
                        Looking for a Job:
                        <span className="text-muted">{props.profile.lookingForAJob === true ? ' Yes ' : ' No'}</span>
                        <br />
                        Looking for a job description:
                        <span className="text-muted">
                            {props.profile.lookingForAJobDescription != null ? ' No description' : ' No description'}
                        </span>
                    </small>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="font-italic text-sm">
                <small>
                    <a href={props.profile.contacts.facebook} className="mx-1">facebook</a>
                    <a href={props.profile.contacts.website} className="mx-1">website</a>
                    <a href={props.profile.contacts.vk} className="mx-1">vk</a>
                    <a href={props.profile.contacts.twitter} className="mx-1">twitter</a>
                    <a href={props.profile.contacts.instagram} className="mx-1">instagram</a>
                    <a href={props.profile.contacts.youtube} className="mx-1">youtube</a>
                    <a href={props.profile.contacts.github} className="mx-1">github</a>
                    <a href={props.profile.contacts.mainLink} className="mx-1">mainLink</a>
                </small>
            </Card.Footer>
        </Card >
    )
};

export default ProfileInfo