import React from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Post = (props) => {
    return (

        <Card className="my-3 bg-light text-dark border-0">
            <Card.Body className="bg-white">
                <Card.Text>
                    {props.message}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0 bg-white">
                <Row>
                    <Col className="col-lg-10 col-sm-7 text-left">
                        {props.likesCounts}
                        <FontAwesomeIcon className="text-dark mx-2" icon={faHeart} size="1x" />
                    </Col>
                    <Col className="col-lg-2 col-sm-5 text-right">
                        <Button disabled type="edit" value="Reset" variant="outline-secondary" size="sm" className="">Edit</Button>{' '}
                        <Button disabled type="reset" value="Reset" variant="outline-secondary" size="sm" className="">Reset</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card >
    )
};

export default Post