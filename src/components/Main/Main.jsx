import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Main = (props) => {
    return (
        <Container fluid className="auth-img-bg px-0">
            <Container>
                <section className="">
                    <h1 className="display-2 text-light">PenScript</h1>
                    <hr className="my-3 text-primary" />
                    <p className="text-light">My way to learning React-Redux and TypeScript</p>
                    <Button size="md" href="/profile" variant="outline-light">Show my profile</Button>
                </section>
            </Container>
        </Container>
    )
};

export default Main