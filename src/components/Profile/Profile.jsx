import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Container } from "react-bootstrap";

const Profile = (props) => {

    // debugger;
    return (
        <Container fluid>
            <Container className="d-flex justify-content-between align-items-start">
                <section className="col-sm-6 col-md-4">
                    <aside>
                        <ProfileInfo profile={props.profile} />
                    </aside>
                </section>
                <section className="col-sm-6 col-md-8">
                    <MyPostsContainer />
                </section>
            </Container>
        </Container>
    )
};

export default Profile