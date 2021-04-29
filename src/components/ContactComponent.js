import React from 'react';
import { ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import '../styles/Forms.css';

function Contact() {
  return(
    <>
      <ModalBody>
        <Form>
          <FormGroup className="mb-0">
            <Label htmlFor="contactName" className="mb-0"><small>Name</small></Label>
            <Input type="text" id="contactName" name="contactName" placeholder="Name" />
          </FormGroup>
          <FormGroup className="mb-0">
            <Label htmlFor="contactEmail" className="mb-0"><small>Email</small></Label>
            <Input type="text" id="contactEmail" name="contactEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup className="mb-0">
            <Label htmlFor="contactPhone" className="mb-0"><small>Phone</small></Label>
            <Input type="tel" id="contactPhone" name="contactPhone" placeholder="Phone Number" />
          </FormGroup>
          <FormGroup className="mb-0">
            <Label htmlFor="contactHelp" className="mb-0"><small>How Can We Help You?</small></Label>
            <Input type="textarea" rows="4" id="contactHelp" name="contactHelp" placeholder="How Can We Help You?" />
          </FormGroup>
        </Form>
      </ModalBody>    
    </>
  );
}

export default Contact;