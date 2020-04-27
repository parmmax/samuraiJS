import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    // debugger;
    return (
        <main className={classes.profileWrap}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              // newText={props.stateProfile.newPostText}
                              // dispatch={props.dispatch}
            />
        </main>
    )
};

export default Profile