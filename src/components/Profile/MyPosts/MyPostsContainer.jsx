import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => {
        let addPostDispatch = addPostActionCreator();
        props.store.dispatch(addPostDispatch);
    };


    let onNewPostChange = (newTextFromTextarea) => {
        let action = updateNewPostTextActionCreator(newTextFromTextarea);
        props.store.dispatch(action);
    };

    return (<MyPosts addPost={addPost}
                     updateNewPostText={onNewPostChange}
                     posts={props.store.getState().profilePage.posts}
                     newPostText={props.store.getState().profilePage.newPostText}
    />)
};

export default MyPostsContainer