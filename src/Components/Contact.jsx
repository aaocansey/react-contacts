import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import contactImage from '../contactImage.png'

const Contact = (props) => {
    return (
        <Col md="7">
            <Card style={{ width: '18rem', marginBottom: '1rem', marginRight: '1rem' }}>
                <Card.Img variant="top" src={contactImage} alt="contact image" style = {{marginLeft:'4rem', marginTop:'1rem', width: '10rem'}}/>
                <Card.Body>
                    <Card.Title>{props.contactInfo.name}</Card.Title>
                    <Card.Text>
                        <p>{props.contactInfo.phoneNumber}</p>
                        <p>{props.contactInfo.location}</p>
                    </Card.Text>
                    <Button variant="primary" style = {{marginRight: '1rem'}}>Call</Button>
                    <Button variant="warning">Message</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Contact;
