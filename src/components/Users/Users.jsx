import React from 'react';
// import Pagination from '../common/Pagination/Pagination';
import { Container, Row, Col, Button, Card, } from 'react-bootstrap';
import Pager from '../common/Pager/Pager';
import PreLoader from '../common/PreLoader/PreLoader';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Users = (props) => {

    return (
        <Container>
            <section id="users">
                <header>
                    <h3 className="display-4 font-weight-light text-primary">Users</h3>
                    <hr />
                </header>
                <article>
                    <Row>
                        <Col className="d-flex justify-content-end">
                            <Pager 
                                activePage={props.activePage}
                                count={props.count}
                                totalCount={props.totalCount}
                                onPageChanged={props.onPageChanged}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            {props.isFetching ? <PreLoader /> : props.users.map(u => <Card key={u.id} className="my-5 bg-light shadow border-0">
                                <Card.Header>
                                    {/* <FontAwesomeIcon className="text-dark" icon={u.photos.small != null ? u.photos.small : faUser} size="2x" /> */}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-primary">{u.name}</Card.Title>
                                    <Card.Text>
                                        <blockquote className="blockquote mb-0">
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">{u.status === null ? 'No status yet' : u.status}</cite>
                                            </footer>
                                        </blockquote>
                                    </Card.Text>
                                    {u.followed
                                        ? <Button size="sm" variant="outline-secondary" onClick={() => { props.unfollow(u.id) }} >Unfollow</Button>
                                        : <Button size="sm" variant="outline-primary" onClick={() => { props.follow(u.id) }} >Follow</Button>
                                    }
                                </Card.Body>
                            </Card >)}
                        </Col>
                    </Row>
                </article>
            </section>
        </Container>
    )

};

export default Users