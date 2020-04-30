import React, { Fragment } from 'react';
import './App.css';

import Header from './component/Header'
import Form from './component/Form'
import { Container } from 'reactstrap';

function App() {
  return (
    <Fragment>
      <Container>
        <Header></Header>
        <Form></Form>
      </Container>
    </Fragment>
  );
}

export default App;
