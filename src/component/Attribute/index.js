import React from "react";
 
import "bootstrap/dist/js/bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Attribute({name, base}) {
    return (
        <Container>
        <Row>
            <Col>{name}</Col>
            <Col>{base}</Col>
            <Col>
                <ProgressBar variant="warning" animated now={base * 0.4}/>
            </Col>
        </Row>
        </Container>
    );
}
export default Attribute