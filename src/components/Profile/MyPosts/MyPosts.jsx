import React from "react";
import Post from "./Post/Post";
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

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
        <Card className="mb-3 bg-light text-dark border-0 shadow">
            <Card.Header className="border-0">
                <h2 className="font-weight-light mb-3">My Posts</h2>
                <InputGroup variant="info" className="w-100 mb-4" size="sm">
                    <FormControl
                        placeholder="Enter your new post"
                        aria-label="Enter your new post"
                        aria-describedby="basic-addon3"
                        onChange={onNewPostChange}
                        value={props.newPostText}
                    />
                    <InputGroup.Append className="">
                        <Button variant="outline-primary" onClick={onAddPost} >Add post</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Header>
            <Card.Body className="my-2">
                {postsElement}
            </Card.Body>
        </Card >
    )
};

export default MyPosts