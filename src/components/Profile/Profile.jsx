import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = (props) => {

    // debugger;
    return (
        <main className = {classes.profileWrap}>
            <ProfileInfo/>
            <MyPosts
                posts = {props.stateProfile.posts}
                newText = {props.stateProfile.newPostText}
                dispatch={props.dispatch}
            />
        </main>
    )
};

export default Profile