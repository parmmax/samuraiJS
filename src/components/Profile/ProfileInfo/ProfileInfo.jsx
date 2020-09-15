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
                    <img src={props.profile.photos.large} alt="user" className="" /> === null
                        ? <img className="" src={props.profile.photos.small} alt={props.profile.fullName} className="mb-3" />
                        : <FontAwesomeIcon className="mb-3" icon={faUser} className="text-primary" size="4x" />
                }
                <hr />
                <Card.Title className="text-primary text-capitalize">{props.profile.fullName}</Card.Title>
                <hr />
                <Card.Subtitle className="font-weight-normal font-italic text-primary">
                    {props.profile.aboutMe != null ? props.profile.aboutMe : 'No description "About Me" '}
                </Card.Subtitle>
                <Card.Text>
                    <div className="text-primary font-weight-light">
                        Looking for a Job:{' '}
                        <span className="text-primary font-weight-normal">
                            {
                                props.profile.lookingForAJob === true
                                    ? ' Yes '
                                    : 'No'
                            }
                        </span>
                    </div>
                    <div className="text-primary font-weight-light">
                        Looking for a job description:{' '}
                        <span className="text-primary font-weight-normal">
                            {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : 'No description'}
                        </span>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="font-italic text-secondary">
                <a href={props.profile.contacts.facebook} className="mx-1">facebook</a>
                <a href={props.profile.contacts.website} className="mx-1">website</a>
                <a href={props.profile.contacts.vk} className="mx-1">vk</a>
                <a href={props.profile.contacts.twitter} className="mx-1">twitter</a>
                <a href={props.profile.contacts.instagram} className="mx-1">instagram</a>
                <a href={props.profile.contacts.youtube} className="mx-1">youtube</a>
                <a href={props.profile.contacts.github} className="mx-1">github</a>
                <a href={props.profile.contacts.mainLink} className="mx-1">mainLink</a>
            </Card.Footer>
        </Card >
    )
};

export default ProfileInfo