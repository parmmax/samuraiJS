import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    // debugger;
    return (
        <main className={classes.profileWrap}>
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    )
};

export default Profile