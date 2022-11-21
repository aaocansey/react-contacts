import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Contact from '../Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = (props) => {
    return (
        <div>
            <Container>
                <Row>
                {props.contactDetails.map((contact) => {
                        return <Contact contactInfo={contact} />
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Contacts;
