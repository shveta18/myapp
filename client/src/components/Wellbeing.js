import React, { Component } from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText } from 'reactstrap';
        

class Wellbeing extends Component {
    render() {
        return (
            <Form>
        <FormGroup>
          <Label for="exampleText">Emotional Wellbeing</Label>
          <Input type="textarea" name="text" id="emotion" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Physical Wellbeing</Label>
          <Input type="textarea" name="text" id="physical" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        )
    }
  }
  
  export default Wellbeing;