import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p =>
        <Post id={p.id}
              message={p.message}
              likesCounts={p.likesCounts}
        />);

    let onAddPost = () => {
        props.addPost()
    };

    let onNewPostChange = (event) => {
        // let newTextFromTextarea = newPostElement.current.value;
        let newTextFromTextarea = event.target.value;
        props.updateNewPostText(newTextFromTextarea);
    };

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
                    <button onClick={onAddPost} className={classes.btnAddPost} type="button">
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