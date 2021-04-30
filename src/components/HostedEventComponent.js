import React, { Component } from 'react';
import { ModalBody, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import '../styles/Forms.css';

class HostedEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPeople: false
    };
  }

  yesPeople = () => {
    this.setState({maxPeople: true});
  }
  
  noPeople = () => {
    this.setState({maxPeople: false});
  }

  render() {
    return(
      <>
        <ModalBody className="pt-0">
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedName" className="mb-0"><small>Contact Name</small></Label>
                  <Input type="text" id="hostedName" name="hostedName" placeholder="Contact Name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedCompany" className="mb-0"><small>Company or Organization</small></Label>
                  <Input type="text" id="hostedCompany" name="hostedCompany" placeholder="Company or Organization" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedEmail" className="mb-0"><small>Email</small></Label>
                  <Input type="email" id="hostedEmail" name="hostedEmail" placeholder="Email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedPhone" className="mb-0"><small>Phone</small></Label>
                  <Input type="tel" id="hostedPhone" name="hostedPhone" placeholder="Phone" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedType" className="mb-0"><small>Type of Event</small></Label>
                  <Input type="select" id="hostedType" name="hostedType">
                    <option value="" selected disabled>Type of Event</option>
                    <option value="birthday">Birthday</option>
                    <option value="holiday">Holiday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate</option>
                    <option value="bach">Bachelor / Bachelorette</option>
                    <option value="rehersal">Rehersal Dinner</option>
                    <option value="shower">Shower</option>
                    <option value="other">Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedDate" className="mb-0"><small>Date</small></Label>
                  <Input type="date" id="hostedDate" name="hostedDate" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="text-center mt-2" style={{ display: this.state.maxPeople ? "block" : "none" }}>
              <Col>
                <Label className="mb-0">Parties of 22 or More are Required to Rent Entire Restaurant</Label>
              </Col>
            </Row>
            <Row form>
              <Col md={6} className="text-center">
                <Label className="mt-3">22 or more in your party?</Label>
                <FormGroup tag="fieldset" className="mb-0" row>                  
                  <Col>
                  <FormGroup className="form-check-inline" check>
                    <Label htmlFor="hostedYes" check>
                      <Input onClick={this.yesPeople} type="radio" id="hostedYes" name="hostedRadios" />{' '}
                      YES
                    </Label>
                  </FormGroup>
                  <FormGroup className="form-check-inline" check>
                    <Label htmlFor="hostedNo" check>
                      <Input onClick={this.noPeople} type="radio" id="hostedNo" name="hostedRadios" />{' '}
                      NO
                    </Label>
                  </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedNumber" className="mb-0"><small>Number of Guests (up to 44)</small></Label>
                  <Input type="text" id="hostedNumber" name="hostedNumber" placeholder="Number of Guests" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup className="mb-0">
                <Label htmlFor="hostedStartTime" className="mb-0"><small>Start Time</small></Label>
                  <Input type="select" id="hostedStartTime" name="hostedStartTime">
                    <option value="" selected disabled>Start Time</option>
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
              <Col md={6}>
                <FormGroup className="mb-0">
                  <Label htmlFor="hostedEndTime" className="mb-0"><small>End Time</small></Label>
                  <Input type="select" id="hostedEndTime" name="hostedEndTime">
                    <option value="" selected disabled>End Time</option>
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
                    <option>10:30PM</option> 
                    <option>11:00PM</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>          
            <FormGroup>
              <Label htmlFor="hostedInfo" className="mb-0"><small>Additional Information</small></Label>
              <Input type="textarea" rows="4" id="hostedInfo" name="hostedInfo" placeholder="List any special needs, allergies, etc..." />
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
}

export default HostedEvent;