import React, { Component, Fragment } from 'react';

import Form from 'react-bootstrap/Form'
import { Button, Container, Input } from 'reactstrap';

import '../formComponent/formComponent'

class FormComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            email: '',
            emailError: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

    }

    handleChangeEmail(event) {

        this.setState({ email: event.target.value });
        let isValidateEmail = this.validateEmail(this.state.email);
        this.setState({ emailError: isValidateEmail });

    }

    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.name + ' ' + this.state.email);
        e.preventDefault();
    }

    validateEmail(email) {
        const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        return expression.test(String(email).toLowerCase())
    }

    handleUserInput(e) {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

    }

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="formName">
                            <Form.Label>Full name</Form.Label>
                            <Input type="Text" placeholder="Enter your full name" value={this.state.name} onChange={this.handleUserInput} name="name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Input type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChangeEmail} />

                            {
                                this.state.emailError ? (
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                ) : (
                                        <span className="spanError">Invalid error</span>
                                    )
                            }
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Button color="success" size="lg" type="submit">Ingresar</Button>
                        </Form.Group>

                    </Form>
                </Container>
            </Fragment>
        )
    }


}

export default FormComponent;