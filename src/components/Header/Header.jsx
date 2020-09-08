import React from "react";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <header id="header" className="shadow">
            <Navbar bg="dark" variant="secondary">
                <Container className="">
                    <Row>
                        <Col>
                            <Navbar.Brand href="/" className="text-secondary font-new">
                                PenScript
                            </Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav className="mr-auto">
                                <Nav.Link className="text-secondary" href="/users">Users</Nav.Link>
                                <Nav.Link className="text-secondary" href="/profile">Profile</Nav.Link>
                                <Nav.Link className="text-secondary" href="/messages">Messages</Nav.Link>
                                <Nav.Link className="text-secondary" href="/projects">Projects</Nav.Link>
                                <Nav.Link className="text-secondary" href="/media">Media</Nav.Link>
                                <Nav.Link className="text-secondary" href="/settings">Settings</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;


