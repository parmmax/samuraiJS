import React from 'react';
import * as axios from 'axios';
import Auth from './Auth';
import { toggleIsFetching } from '../../../Redux/usersReducer';
import { setAuthUserData } from '../../../Redux/authReducer';
import { connect } from "react-redux";

class AuthContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return (
           <Auth
              {...this.props}
           />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(
    mapStateToProps,
    {
        setAuthUserData,
        toggleIsFetching
    }
)(AuthContainer);