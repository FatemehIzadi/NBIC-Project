import React from "react";
import {Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import InstructionsCard from "./InstructionsCard";


const renderCheckbox = ({ input, label }) =>
  <FormControlLabel
    control={
      <Checkbox
        {...input}
        checked={input.value ? true : false}
        onCheck={input.onChange}
      />
    }
    label={label}
  />

const CreateReport = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="create-report-form-container mobile-padding">
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="quotation-checkbox" component={renderCheckbox} label="Quotation to do" />
        </div>

        <div>
          <Button raised color="accent" label="CreateQuotation">
            Create a Quotation
          </Button>
          <Button raised color="accent" label="TakeNotes">
            Take some notes
          </Button>
        </div>


        <Button raised color="accent" type="submit" label="send" disabled={pristine || submitting}>
          Send
        </Button>

      </form>
    </div>
  );
};

export default function Instructions() {


   var isActive = true;

    return (
        <div>
            <Card className="mb-3 main-card">
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

   