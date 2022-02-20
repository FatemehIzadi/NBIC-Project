import React from "react";
import {Card, Container, Row, Col} from 'react-bootstrap';
import InstructionsCard from "./InstructionsCard";

import './Instructions.css';
 
class Instructions extends React.Component {

    render () {

    return (
        <div 
        // className='py-auto'
        >
        <Container>
        <Row className="my-3 instructions-main"
        //   hidden
        //    = {this.props.hidden}
         >
             <Col>
            <Card className="main-instructions-card">
                <Card.Body>
                    <InstructionsCard/ >
                </Card.Body> 
            </Card>
            </Col>
        </Row>
        </Container>
</div>
    );
    }
}
export default Instructions;


   