import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'react-bootstrap';
import PreLoader from '../../common/PreLoader/PreLoader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <PreLoader />
    }

    return (
        <Card className="mb-3 text-center border-0 shadow bg-white">
            <Card.Body className="">
                <div className="">
                    <div className="mb-3 rounded-circle">
                        {
                            props.profile.photos.small === null
                                ? <FontAwesomeIcon className="text-dark" icon={faUser} size="4x" />
                                : <img src={props.profile.photos.small} alt={props.profile.fullName} className="avatar-normal rounded-circle" />
                        }
                    </div>
                </div>
                <Card.Title className="text-capitalize">{props.profile.fullName}</Card.Title>
               <div className="text-info">
                  <ProfileStatus />
               </div>
            </Card.Body>
            <Card.Footer className="font-italic font-weight-light">
                If current user follower for requested user<br />
                <Button disabled={true}
                    className="text-weight-light border-0"
                    variant="outline-secondary"
                    size="sm"
                >
                    Followed?
                </Button>
            </Card.Footer>
        </Card >
    )
};

export default ProfileInfo