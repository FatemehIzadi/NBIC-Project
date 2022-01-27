import React from "react";
import {Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import InstructionsCard from "./InstructionsCard";

import './Instructions.css';
 
export default function Instructions() {


   var isActive = true;

    return (
        <div className='instructions-main'>
            <Card className="mb-3 main-weather-card">
                <Card.Body>
                    <InstructionsCard/ >
                </Card.Body>
                
    
    <Form.Check 
        type="checkbox"
        // id={`default-${type}`}
        onChange={(event) => this.handleCheck(event)}
        checked= {true}
        label= "قوانین را مطالعه کرده‌ام و می‌پذیرم"
      />        
             
                { isActive ? <Button> شرکت در تست </Button> : null }
                
            </Card>
        </div>
    );
}

   