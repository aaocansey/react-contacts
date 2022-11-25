import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Contact from '../Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    {props.contactDetails.map((contact, index) => {
                        return <Contact contactInfo={contact} key={index} deleteContact={props.deleteContact} updateContact={props.updateContact} />
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Contacts;
