import React, { Component, Fragment } from 'react';

import Form from 'react-bootstrap/Form'
import { Button, Container } from 'reactstrap';

class FormComponent extends Component {

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Form>

                        <Form.Group controlId="formName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="Text" placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center">
                            <Button color="success" size="lg">Ingresar</Button>
                        </Form.Group>

                    </Form>
                </Container>
            </Fragment>
        )
    }

}

export default FormComponent;