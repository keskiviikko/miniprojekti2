import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';
export default class QuestionList2 extends Component {
    render() {
        return (
            <Container>
            <Row>
                <Col sm={8}>Under construction</Col>
                <Col sm={4}><Item/></Col>
            </Row>
        </Container>
        )
    }
}
