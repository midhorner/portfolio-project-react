import React from 'react';
import { ModalBody, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import '../styles/Forms.css';

function Careers() {
  return(
    <>
      <ModalBody className="pt-0">
        <Form>
          <Row form>
            <Col md={6}>      
              <FormGroup className="mb-0">
                <Label htmlFor="careerName" className="mb-0"><small>Name</small></Label>
                <Input type="text" id="careerName" name="careerName" placeholder="Name" />
              </FormGroup>
            </Col> 
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="careerEmail" className="mb-0"><small>Email</small></Label>
                <Input type="email" id="careerEmail" name="careerEmail" placeholder="Email" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="careerPhone" className="mb-0"><small>Phone</small></Label>
                <Input type="tel" id="careerPhone" name="careerPhone" placeholder="Phone Number" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="careerPositionsAvailable" className="mb-0"><small>Available Positions</small></Label>
                <Input type="select" id="careerPositionsAvailable" name="careerPositionsAvailable">
                  <option value="" selected disabled>Available Positions</option>
                  <option value="2">Dishwasher</option>
                  <option value="3">Line Cook</option>
                  <option value="4">Prep Cook</option>
                  <option value="5" disabled>Host</option>
                  <option value="6">Busser</option>
                  <option value="7">Server</option>
                  <option value="8" disabled>Bartender</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label htmlFor="careerCoverLetter" className="mb-0"><small>Tell Us About Yourself</small></Label>
            <Input type="textarea" rows="8" id="careerCoverLetter" name="careerCoverLetter" placeholder="Submit a Cover Letter" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="uploadResume">Upload your resumé.</Label>
            <Input type="file" id="uploadResume" name="uploadResume" />
          </FormGroup>
          <div className="row mt-2">
            <div className="col text-center">
              <button type="submit" className="btn btn-submit">Apply</button>
            </div>
          </div>
        </Form>
      </ModalBody>    
    </>
  );
}

export default Careers;