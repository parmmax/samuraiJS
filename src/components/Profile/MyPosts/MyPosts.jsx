import React from "react";
import Post from "./Post/Post";
import { Form, FormControl, Button } from 'react-bootstrap';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p =>
        <Post key={p.id}
            id={p.id}
            message={p.message}
            likesCounts={p.likesCounts}
        />);

    let onAddPost = () => {
        props.addPost()
    };

    let onNewPostChange = (event) => {
        let newTextFromTextarea = event.target.value;
        props.updateNewPostText(newTextFromTextarea);
    };

    return (
        <section className="shadow p-4 rounded-sm w-100 bg-white">
            <header className="border-0">
                <h5 className="font-weight-light text-center mb-3">My Posts</h5>
            </header>
            <article>
                <Form.Group variant="info" className="d-flex flex-column justify-content-center align-items-end mb-4" size="sm">
                    <FormControl
                        placeholder="Enter new post"
                        as="textarea"
                        rows="3"
                        cols="5"
                        onChange={onNewPostChange}
                        value={props.newPostText}
                        className="mb-2"
                    />
                    <Button variant="outline-secondary" size="sm" onClick={onAddPost} >Add post</Button>
                </Form.Group>
            </article>
            <article>
                {postsElement}
            </article>
        </section>
    )
};

export default MyPosts