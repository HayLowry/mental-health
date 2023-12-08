import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import SubmissionForm from "./SubmissionForm";

class SubmissionModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Submission";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "New Submission";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <SubmissionForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              submission={this.props.submission}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default SubmissionModal;