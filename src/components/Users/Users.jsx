import React from 'react';
import { Container, Row, Col, Button, Card, NavLink } from 'react-bootstrap';
import Pager from '../common/Pager/Pager.tsx';
import PreLoader from '../common/PreLoader/PreLoader';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { followAPI } from '../../api/api';

const Users = (props) => {

    return (
        <Container fluid>
            <Container>
                <section id="users">
                    <header>
                        <h3 className="display-4 font-weight-light text-primary">Users</h3>
                        <hr />
                    </header>
                    <article>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Pager
                                    activePage={props.activePage}
                                    countPerPage={props.countPerPage}
                                    totalCount={props.totalCount}
                                    onPageChanged={props.onPageChanged}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                {props.isFetching ? <PreLoader /> : props.users.map(u => <Card key={u.id} className="my-5 bg-light shadow border-0">
                                    <Card.Header>
                                        <NavLink href={'/profile/' + u.id}>
                                            {
                                                u.photos.small != null
                                                    ? <img className="text-dark" src={u.photos.small} alt="user" />
                                                    : <FontAwesomeIcon className="text-muted" icon={faUser} size="2x" />
                                            }
                                        </NavLink>
                                    </Card.Header>
                                    <Card.Body>
                                        <NavLink href={'/profile/' + u.id}>
                                            <Card.Title className="text-primary">{u.name}</Card.Title>
                                        </NavLink>
                                        <Card.Text>
                                            {u.status === null ? <span className="text-muted font-italic">&mdash; No status yet</span> : <span className="text-primary font-italic">&mdash; {u.status}</span>}
                                        </Card.Text>
                                        {u.followed
                                            ? <Button size="sm" variant="outline-secondary" onClick={() => {
                                                followAPI.deleteFollow(u.id)
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unfollow(u.id);
                                                        }
                                                    });
                                            }} >Unfollow</Button>
                                            : <Button size="sm" variant="outline-primary" onClick={() => {
                                                followAPI.postFollow(u.id)
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(u.id);
                                                        }
                                                    });
                                            }} >Follow</Button>
                                        }
                                    </Card.Body>
                                </Card >)}
                            </Col>
                        </Row>
                    </article>
                </section>
            </Container>
        </Container>
    )

};

export default Users