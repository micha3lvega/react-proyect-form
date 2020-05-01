import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from './components/header/header'
import FormComponent from './components/formComponent/formComponent'

import './App.css';

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
