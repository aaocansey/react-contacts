import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class EditContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.contactInfo.name,
            phoneNumber: this.props.contactInfo.phoneNumber,
            location: this.props.contactInfo.location,
            id: this.props.contactInfo.id
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit  = (e) => {
        e.preventDefault()
        this.props.updateContact(this.state.id, this.state);
        console.log(this.state);
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={this.state.name}  name="name" onChange={this.handleChange}/>               
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Number" value={this.state.phoneNumber}  name="phoneNumber" onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" value={this.state.location}  name="location" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default EditContact;
