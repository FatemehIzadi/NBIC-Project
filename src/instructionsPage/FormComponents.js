import React from "react";
import {Form, Button} from 'react-bootstrap';
import {BrowserRouter, Link, Routes , Route } from 'react-router-dom';

import PlayVoice from "../playVoicePage/PlayVoice";

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
        {/* <BrowserRouter> */}
           <Link to="/playVoice">
                <Button className='start-button' disabled = {this.state.disabled}> شرکت در تست </Button>            
           </Link>
        {/* </BrowserRouter>   */}

        <Routes>
               <Route path='/playVoice' element={<PlayVoice />} />
        </Routes >
           </Form>
           
            </div>
    );
        }
    }
export default FormComponents;