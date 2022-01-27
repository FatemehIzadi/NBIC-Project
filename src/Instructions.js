import React from "react";
import {Card} from 'react-bootstrap';
import InstructionsCard from "./InstructionsCard";
import FormComponents from "./FormComponents";

import './Instructions.css';
 
export default function Instructions() {

    return (
        <div className='instructions-main'>
            <Card className='mb-3 main-card'>
                <Card.Body>
                    <InstructionsCard/ >
                    <FormComponents/ >
                </Card.Body> 
            </Card>
        </div>

    );
}

   