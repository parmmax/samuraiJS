import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getProfile, setUserProfile} from '../../Redux/profileReducer';
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8206;
        }


        // let name = this.props
        // debugger;

        this.props.getProfile(userId);
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
};

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlContainerComponent);