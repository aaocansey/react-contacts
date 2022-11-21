import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        { name: "Albert", phoneNumber: "+148556226", location: "Canada" },
        { name: "Joseph", phoneNumber: "+446833662", location: "USA" },
        { name: "Allan", phoneNumber: "+1582244791", location: "London" },
      ]
    }
  }
  addContact = (newContact) => {
    this.setState({contacts: [...this.state.contacts, newContact]})
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><ContactForm addnewContact={this.addContact}/></Col>
          <Col>
            <Contacts contactDetails={this.state.contacts} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
