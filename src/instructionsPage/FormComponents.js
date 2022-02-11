import React from "react";
import {Form, Button} from 'react-bootstrap';
import {
    // BrowserRouter, 
    Link
    // , Routes , Route
 } from 'react-router-dom';

// import PlayVoice from "../playVoicePage/PlayVoice";

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

        else {
            this.setState(
                {
                    disabled : true
                }
            );
        }
    }
    render() {
        return(
        <div className='form-button-checkbox text-center py-3'>
            <Form>
                <div>
                <Form.Check
                className="mb-3"
                    inline
                    type="checkbox"
                    label= "قوانین را مطالعه کرده‌ام و می‌پذیرم"
                    onChange={(event) => this.handleCheck(event)}
                />
                </div>
                   <div>
           <Link to="/playVoice">
                <Button className='start-button' disabled = {this.state.disabled}> شرکت در تست </Button>            
           </Link>
           </div>
           </Form>
           </div>
    );
        }
    }
export default FormComponents;