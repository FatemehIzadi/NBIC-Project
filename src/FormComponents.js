import React from "react";
import {Form, Button} from 'react-bootstrap';

import './FormComponents.css';

export default function FormComponents() {
    return(
        <div className='text-center'>
            <br/>
            <Form>
                <Form.Check
                    inline
                    type="checkbox"
                    label= "قوانین را مطالعه کرده‌ام و می‌پذیرم"
                    // onChange={(event) => this.handleCheck(event)}
                />   
                <br/>
                {/* { isActive ?  */}
                <br/>
                <Button className='start-button'> شرکت در تست </Button>
                {/* : null } */}
            </Form>
            </div>
    );
}