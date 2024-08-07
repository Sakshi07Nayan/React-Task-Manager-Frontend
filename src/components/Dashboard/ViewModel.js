import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ViewTaskModal = ({ show, handleClose, task }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Title:</h5>
        <p>{task.title}</p>
        <h5>Description:</h5>
        <p>{task.description}</p>
        <h5>Status:</h5>
        <p>{task.status}</p>
        <h5>Created At:</h5>
        <p>{task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewTaskModal;
