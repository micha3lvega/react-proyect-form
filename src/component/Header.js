import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css'

import { Container } from 'reactstrap';

const Header = () => (
    <Fragment className="header">
        <Container fluid>
            <h1 className="display-3">React application</h1>
            <hr/>
        </Container>
    </Fragment>);

export default Header;