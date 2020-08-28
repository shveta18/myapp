import React, { Component } from 'react';
import { 
    Container,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
     } from 'reactstrap';
        

class Wellbeing extends Component {
    render() {
        return (
          <Container>
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
      </Container>
        )
    }
  }
  
  export default Wellbeing;