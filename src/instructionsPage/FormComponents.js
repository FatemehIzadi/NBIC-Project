// import React from "react";
// import {Form, Button} from 'react-bootstrap';
// import {BrowserRouter, Link, Routes , Route } from 'react-router-dom';
// import { useState } from "react";

// import PlayVoice from "../playVoicePage/PlayVoice";

// import './FormComponents.css';

// export const ExampleComponent = () => {
//     const [showElem, setShowElem] = useState(true)
 
//     return (
//       <div>
//      { showElem && <h1>Hello</h1> }
//      <Button onClick={() => { 
//         setShowElem(!showElem) 
//      }} />
//      </div>
//     )
//  }

// class FormComponents extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//             disabled : true, 
//             showing :true,
//             show : true
//         };
//       }

//     state = {
//     }

//     handleCheck(event) {
//         if(event.target.checked) {
//             this.setState(
//                 {
//                     disabled : false
//                 }
//             );
//         }
//         else {
//             this.setState(
//                 {
//                     disabled : true
//                 }
//             );
//         }
//     }

//     render() {
//         return(
//         <div className='text-center'>
//             <br/>
//             <Form>
//                 <Form.Check
//                     inline
//                     type="checkbox"
//                     label= "قوانین را مطالعه کرده‌ام و می‌پذیرم"
//                     onChange={(event) => this.handleCheck(event)}
//                 />   
               

//                 <br/>
//                 <br/>
//            {/* <Link to="/playVoice"> */}
//                 <Button className='start-button' 
//                 disabled={this.state.disabled} 
//                 // onClick={() => this.setState({ showing: !showing })}
//                 > 
//                 شرکت در تست 
//                 </Button>     
//            {/* </Link> */}
// {/* 
//         <Routes>
//                <Route path='/playVoice' element={<PlayVoice />} />
//         </Routes > */}
//            </Form>
//            <ExampleComponent />

//       {/* <button onClick={() => this.setState({this.state.show : !this.state.show})}>
//         salam
//         { show ? <ExampleComponent /> : null }
//       </button> */}
//             </div>
//     );
//         }
//     }
// export default FormComponents;

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
           <Link to="/playVoice">
                <Button className='start-button' disabled = {this.state.disabled}> شرکت در تست </Button>            
           </Link>
           </Form>
            
            </div>
    );
        }
    }
export default FormComponents;