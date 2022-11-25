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
        { name: "Albert", phoneNumber: "148556226", location: "Canada", id: "uuidd4"},
        { name: "Joseph", phoneNumber: "446833662", location: "USA", id: "ttoop5" }, 
        { name: "Allan", phoneNumber: "1582244791", location: "London", id: "yymm90"},
      ]
    }
  }
  addContact = (newContact) => {
    newContact.id = Math.random().toString()
    this.setState({contacts: [...this.state.contacts, newContact]})
    console.log(this.state)
  }

  updateContact = (id, replacementData) => {
    this.setState({contacts: this.state.contacts.map((item) => {
        if (item.id === id) {
            return replacementData
        } else {
            return item
        }
    })})
}

deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter((item) => 
    {if(item.id !== id){
      return item;
    }
    })
    this.setState({contacts: undeletedContacts})
}
  render() {
    return (
      <Container>
        <Row>
          <Col><ContactForm addnewContact={this.addContact}/></Col>
          <Col>
            <Contacts contactDetails={this.state.contacts} deleteContact={this.deleteContact} updateContact={this.updateContact}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
