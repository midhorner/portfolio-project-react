import React from 'react';
import { ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import '../styles/Forms.css';

function Reservations() {
  return(
    <>
      <ModalBody>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="resName" className="mb-0"><small>Name</small></Label>
                <Input type="text" id="resName" name="resName" placeholder="Name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="resPartySize" className="mb-0"><small>Party Size</small></Label>
                <Input type="select" id="resPartySize" name="resPartySize">
                  <option value="" selected disabled>Party Size...</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="resDate" className="mb-0"><small>Date</small></Label>
                <Input type="date" id="resDate" name="resDate" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-0">
                <Label htmlFor="resTime" className="mb-0"><small>Time</small></Label>
                <Input type="select" id="resTime" name="resTime">
                  <option value="" selected disabled>Time</option>
                  <option>Noon</option>
                  <option>12:30PM</option>
                  <option>1:00PM</option>
                  <option>1:30PM</option>
                  <option>2:00PM</option>
                  <option>2:30PM</option>
                  <option>3:00PM</option>
                  <option>3:30PM</option>
                  <option>4:00PM</option>
                  <option>4:30PM</option>
                  <option>5:00PM</option>
                  <option>5:30PM</option>
                  <option>6:00PM</option>
                  <option>6:30PM</option>
                  <option>7:00PM</option>
                  <option>7:30PM</option>
                  <option>8:00PM</option>
                  <option>8:30PM</option>
                  <option>9:00PM</option>
                  <option>9:30PM</option>
                  <option>10:00PM</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="mb-0">
            <Label htmlFor="resEmail" className="mb-0"><small>Email</small></Label>
            <Input type="email" id="resEmail" name="resEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="resInfo" className="mb-0"><small>Additional Information</small></Label>
            <Input type="textarea" rows="4" id="resInfo" name="resInfo" placeholder="List any special needs, allergies, etc..." />
          </FormGroup>
          <div className="row mt-2">
            <div className="col text-center">
              <button type="submit" className="btn btn-submit">Submit</button>
            </div>
          </div>
        </Form>
      </ModalBody>
    
    </>
  );
}

export default Reservations;