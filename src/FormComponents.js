import React from "react";
import {Form, Button} from 'react-bootstrap';

import './FormComponents.css';

class FormComponents extends React.Component {
    
    state = {
        disabled : true
    }

    handleCheck(event) {
        if(event.target.checked) {
            this.setState(
                {
                    disabled : false
                }
            );
        }
    }
    render() {
        return(
        <div className='text-center'>
            <br/>
            <Form>
                <Form.Check
                    inline
                    type="checkbox"
                    label= "قوانین را مطالعه کرده‌ام و می‌پذیرم"
                    onChange={(event) => this.handleCheck(event)}
                />   
               

                <br/>
                <br/>

                <Button className='start-button' disabled = {this.state.disabled} href = 'https://google.com'> شرکت در تست </Button>
           </Form>
            </div>
    );
        }
    }
export default FormComponents;