import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserProfile } from '../../Redux/profileReducer';
import { toggleIsFetching } from '../../Redux/preLoaderReducer';
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {

        // debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8206;
        }

        toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                console.log(response.data);
                toggleIsFetching(false);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlContainerComponent);