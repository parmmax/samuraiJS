import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Projects = (props) => {
    return (
        <Container className="py-4">
            <section className="min-vh-100 mt-4 d-flex flex-column justify-content-start">
                <header>
                    <h2 className="display-4 font-family-secondary text-primary font-weight-light">Projects</h2>
                    <hr className="my-4" />
                    <p className="text-info">On this page you can find all my projects</p>
                    <hr className="my-4" />
                    <Button disabled variant="outline-info" size="md">Get Projects</Button>
                    <Button variant="outline-info" href="/profile" className="ml-2">Back to profile</Button>
                </header>
                <article>
                    <p className="text-muted">Projects wasn't uploaded yet!</p>
                </article>
            </section>
        </Container>
    )
};

export default Projects