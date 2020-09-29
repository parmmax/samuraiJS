import React from 'react';
import Login from './Login';
import { connect } from "react-redux";

class LoginContainer extends React.Component  {
    
    componentDidMount() {


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