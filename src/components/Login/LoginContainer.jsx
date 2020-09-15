import React from 'react';
import * as axios from 'axios';
import Login from './Login';
import { connect } from "react-redux";

class LoginContainer extends React.Component  {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {});
    }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {}
};

export default connect(
    mapStateToProps,
    {}
)(LoginContainer);