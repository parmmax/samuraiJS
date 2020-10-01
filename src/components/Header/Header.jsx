import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import AuthContainer from "../common/Auth/AuthContainer";

const Header = (props) => {
    return (
        <header id="header" className="position-relative zIndex-2">
            <Container fluid className="px-0 position-absolute">
                <Navbar bg="transporent" >
                    <Container>
                        <Row>
                            <Col>
                                <Navbar.Brand href="/" className="lead text-primary font-weight-light font-family-secondary">
                                    <h3>pen<span className="text-secondary">S</span>cript</h3>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Nav className="mr-auto font-weight-normal">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Documentation" id="basic-nav-dropdown" className="">
                                        <NavDropdown.Item className="" target="_blank" href="https://social-network.samuraijs.com/">Social Network API</NavDropdown.Item>
                                        <NavDropdown.Item className="" target="_blank" href="https://social-network.samuraijs.com/docs">Social Network API doc</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="" target="_blank" href="https://openweathermap.org/current#name">Open Weather API</NavDropdown.Item>
                                        <NavDropdown.Item className="" target="_blank" href="https://openweathermap.org/faq">Open Weather FAQ</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="" target="_blank" href="https://reacttraining.com/">React Training</NavDropdown.Item>
                                        <NavDropdown.Item className="" target="_blank" href="https://react-bootstrap.github.io/components/alerts">React-Bootstrap</NavDropdown.Item>
                                        <NavDropdown.Item className="" target="_blank" href="https://bootstrap-4.ru/articles/cheatsheet/">Bootstrap Cheatsheet</NavDropdown.Item>
                                        <NavDropdown.Item className="" target="_blank" href="https://www.youtube.com/watch?v=gb7gMluAeao&ab_channel=IT-KAMASUTRA">YouTube</NavDropdown.Item>
                                        <NavDropdown.Item className="" target="_blank" href="https://github.com/it-kamasutra/react-way-of-samurai">GitHub</NavDropdown.Item>
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


