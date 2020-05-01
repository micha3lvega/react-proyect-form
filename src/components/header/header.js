import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css'


const Header = () => (
    <Fragment >
        <Container fluid>
            <h1 className="display-3">Form react application</h1>
            <hr/>
        </Container>
    </Fragment>);

export default Header;