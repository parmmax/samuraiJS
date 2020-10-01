import React from 'react';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// debugger;
const Auth = (props) => {
    return (
        <>
            {
                props.isAuth
                    ? props.login
                    : "Sing in"
                }
        </>
    )
}

export default Auth;

// ? <FontAwesomeIcon className="text-primary" icon={faSignInAlt} size="1x" />
// : <FontAwesomeIcon className="text-secondary" icon={faSignOutAlt} size="1x" />