import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import HostedEvent from './HostedEventComponent';
import PrivateEvent from './PrivateEventComponent';
import '../styles/Forms.css';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen1: false,
      isModalOpen2: false
    }
  }

  toggleModal1 = () => {
    this.setState({
      isModalOpen1: !this.state.isModalOpen1
    });
  }

  toggleModal2 = () => {
    this.setState({
      isModalOpen2: !this.state.isModalOpen2
    });
  }

  render() {
    return(
      <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <button className="btn" onClick={this.toggleModal1}>Hosted Event</button>
          </div>
          <div className="col">
            <button className="btn" onClick={this.toggleModal2}>Private Event</button>
          </div>
        </div>
      </div>
      <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1} className="modal-dialog-centered modal-lg">
        <ModalHeader toggle={this.toggleModal1}>Hosted Event</ModalHeader>
        <HostedEvent />
      </Modal>
      <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2} className="modal-dialog-centered modal-lg">
        <ModalHeader toggle={this.toggleModal2}>Private Event</ModalHeader>
        <PrivateEvent />
      </Modal>
      
      </> 
    );
  }
}

export default Events;