import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Projects = (props) => {
    return (
        <Container>
            <section className="h-75v">
                <header>
                    <h3 className="display-4 font-weight-light">Projects</h3>
                    <hr className="my-4" />
                    <p className="text-secondary">On this page you can find all my projects</p>
                    <hr className="my-4" />
                    <Button disabled variant="outline-info">Get Projects</Button>
                </header>
                <article>
                    <p className="text-muted">Projects wasn't uploaded yet!</p>
                </article>
            </section>
        </Container>
    )
};

export default Projects