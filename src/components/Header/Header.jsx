import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import AuthContainer from "../common/Auth/AuthContainer";

const Header = (props) => {
    return (
        <header id="header">
            <Container fluid className="px-0">
                <Navbar bg="transporent" variant="primary">
                    <Container>
                        <Row>
                            <Col>
                                <Navbar.Brand href="/" className="text-primary font-weight-light font-italic">
                                    PenScript
                                </Navbar.Brand>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Nav className="mr-auto font-weight-light">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/users">Peoples</Nav.Link>
                                    {/* <Nav.Link href="/messages">Messages</Nav.Link> */}
                                    <NavDropdown title="Documentation" id="basic-nav-dropdown" className="">
                                        <NavDropdown.Item className="text-primary" target="_blank" href="https://social-network.samuraijs.com/docs">API documentation</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="text-primary" target="_blank" href="https://reacttraining.com/">React Training</NavDropdown.Item>
                                        <NavDropdown.Item className="text-primary" target="_blank" href="https://react-bootstrap.github.io/components/alerts">React-Bootstrap</NavDropdown.Item>
                                        <NavDropdown.Item className="text-primary" target="_blank" href="https://bootstrap-4.ru/articles/cheatsheet/">Bootstrap Cheatsheet</NavDropdown.Item>
                                        <NavDropdown.Item className="text-primary" target="_blank" href="https://www.youtube.com/watch?v=gb7gMluAeao&ab_channel=IT-KAMASUTRA">YouTube</NavDropdown.Item>
                                        <NavDropdown.Item className="text-primary" target="_blank" href="https://github.com/it-kamasutra/react-way-of-samurai">GitHub</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/profile"><AuthContainer /></Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;


