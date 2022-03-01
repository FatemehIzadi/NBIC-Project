import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../Assets/styles/instructions/FormComponents.css';

class FormComponents extends React.Component {
    
    state = {
        buttonDisabled : true
    }

    handleCheck(event) {
        if(event.target.checked) {
            this.setState(
                {
                    buttonDisabled : false
                }
            );
        }

        else {
            this.setState(
                {
                    buttonDisabled : true
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
                <Button className='start-button' disabled = {this.state.buttonDisabled}> شرکت در تست </Button>            
           </Link>
           </div>
           </Form>
           </div>
    );
        }
    }
export default FormComponents;