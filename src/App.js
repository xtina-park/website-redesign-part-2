import React, { Component } from 'react';

import { Navigator, Main, Footer } from './components';
import './App.css';

import styled from 'styled-components';

const DIVM = styled.div`
  min-height: 60vh;
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <DIVM><Main /></DIVM>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
