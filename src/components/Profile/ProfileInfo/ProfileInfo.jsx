import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'react-bootstrap';
import PreLoader from '../../common/PreLoader/PreLoader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <PreLoader />
    }

    return (
        <Card className="mb-3 text-center border-0 bg-transparent">
            <Card.Body className="">
               <div className="mb-3 rounded-circle">
                  {
                     props.profile.photos.small === null
                        ? <FontAwesomeIcon className="text-light" icon={faUser} size="4x" />
                        : <img src={props.profile.photos.small} alt={props.profile.fullName} className="avatar-normal rounded-circle" />
                  }
               </div>
                <Card.Title className="mb-1 text-capitalize">{props.profile.fullName}</Card.Title>
               <div>
                  <ProfileStatus status={props.status}
                                 updateStatus={props.updateStatus} />
               </div>
            </Card.Body>
            <Card.Footer className="font-italic font-weight-light border-0 bg-transparent">
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