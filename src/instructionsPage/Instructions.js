import React from "react";
import {Card} from 'react-bootstrap';
import InstructionsCard from "./InstructionsCard";

import './Instructions.css';
 
class Instructions extends React.Component {

    render () {

    return (
        <div className="instructions-main"
        //   hidden
        //    = {this.props.hidden}
         >
            <Card className="mb-3 main-instructions-card">
                <Card.Body>
                    <InstructionsCard/ >
                </Card.Body> 
            </Card>
        </div>

    );
    }
}
export default Instructions;


   