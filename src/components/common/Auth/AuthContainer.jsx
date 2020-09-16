import React from 'react';
import Auth from './Auth';
import { toggleIsFetching } from '../../../Redux/preLoaderReducer';
import { setAuthUserData } from '../../../Redux/authReducer';
import { connect } from "react-redux";
import { authAPI } from '../../../api/api';

class AuthContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        authAPI.getAuthMe()
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
        isFetching: state.preLoader.isFetching
    }
};

export default connect(
    mapStateToProps,
    {
        setAuthUserData,
        toggleIsFetching
    }
)(AuthContainer);