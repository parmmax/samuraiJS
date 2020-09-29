import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="home-bg min-vh-100 zIndex-1">
            <Container className="vh-100 text-center d-flex justify-content-center align-items-center">
                <section>
                    <h1 className="display-2 text-light font-family-secondary">pen<span className="text-light">S</span>cript</h1>
                    <hr className="my-3 text-primary" />
                    <h5 className="text-light font-weight-lighter">My way to learning React-Redux and TypeScript</h5>
                    <hr className="my-3 text-primary" />
                    {/*<Button href="/profile" variant="outline-secondary" size="md">Show profile</Button>*/}
                    {/*<Button href="/users" variant="outline-info" size="md" className="ml-2">Get users</Button>*/}
                    <Button href="/login" variant="outline-secondary" size="lg" className="ml-0">Sing in</Button>
                    {/*<Button href="/login" variant="outline-secondary" size="lg" className="ml-2"></Button>*/}
                </section>
            </Container>
        </Container>
    )
};

export default Home