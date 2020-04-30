import React, { Fragment } from 'react';
import './App.css';

import Header from './component/Header'
import FormComponent from './component/FormComponent'
import { Container } from 'reactstrap';

function App() {
  return (
    <Fragment>
      <Container>
        <Header></Header>
        <FormComponent></FormComponent>
      </Container>
    </Fragment>
  );
}

export default App;
