import React, { useState } from 'react';
import { Col, Card, Button, Modal } from 'react-bootstrap';
import contactImage from '../contactImage.png'
import EditContact from './EditContact';

const Contact = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => props.deleteContact(props.contactInfo.id)
    return (
        <Col md="7">
            <Card style={{ width: '18rem', marginBottom: '1rem', marginRight: '1rem' }}>
                <Card.Img variant="top" src={contactImage} alt="contact image" style={{ marginLeft: '4rem', marginTop: '1rem', width: '10rem' }} />
                <Card.Body>
                    <Card.Title>{props.contactInfo.name}</Card.Title>
                    <Card.Text>
                        <p>{props.contactInfo.phoneNumber}</p>
                        <p>{props.contactInfo.location}</p>
                    </Card.Text>
                    <Button variant="primary" style={{ marginRight: '1rem' }}>Call</Button>
                    <Button variant="warning" style={{ marginRight: '1rem' }}>Message</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    <Button variant="danger" onClick={handleShow}>Edit</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContact updateContact={props.updateContact} contactInfo={props.contactInfo} closeForm={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
}

export default Contact;
