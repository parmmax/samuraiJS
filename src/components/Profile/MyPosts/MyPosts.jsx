import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onNewPostChange = (event) => {
        let newTextFromTextarea = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(newTextFromTextarea));
    };

    // debugger;
    let postsElement = props.posts.map(p =>
        <Post
            id={p.id}
            message={p.message}
            likesCounts={p.likesCounts}
        />);

    // let newPostElement = React.createRef();


    return (
        <section className={classes.container}>
            <h3 className={classes.title}>My Posts</h3>
            <section className={classes.newPostWrap}>
                <textarea className={classes.newPostArea}
                          cols="30" rows="10"
                          placeholder='Enter your new post'
                          // ref={newPostElement}
                          onChange={onNewPostChange}
                          value={props.newPostText}

                />
                <div className={classes.btnWrap}>
                    <button onClick={addPost} className={classes.btnAddPost} type="button">
                        Add Post
                    </button>
                </div>
            </section>
            <section className={classes.postsElementWrap}>
                {postsElement}
            </section>
        </section>
    )
};

export default MyPosts