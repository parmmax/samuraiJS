import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Container, Nav, Navbar } from "react-bootstrap";

const Profile = (props) => {

    // debugger;
    return (
        <Container fluid>
            <Container className="d-flex flex-row justify-content-between align-items-start">
                <section className="col-sm-3">
                    <aside>
                        <ProfileInfo profile={props.profile} />
                        <Navbar variant="primary" className="rounded">
                            <Nav className="mr-auto font-weight-bold d-flex flex-column">
                                <Nav.Link href="/messages">Messages</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                            </Nav>
                        </Navbar>
                    </aside>
                </section>
                <section className="col-sm-9">
                    <MyPostsContainer />
                </section>
            </Container>
        </Container>
    )
};

export default Profile