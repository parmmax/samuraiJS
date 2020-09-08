import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Container } from "react-bootstrap";

const Profile = (props) => {

    // debugger;
    return (
        <Container>
            <section>
                <ProfileInfo />
                <MyPostsContainer />
            </section>
        </Container>
    )
};

export default Profile