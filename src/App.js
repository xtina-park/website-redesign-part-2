import React, { Component } from 'react';

import { Navigator, Main, Footer } from './components';

import styled from 'styled-components';

const Containz = styled.div`
    display: flex;
    flex-direction: column;
`

const DIVN = styled.div`
  padding-top: 5rem;
`

const DIVM = styled.div`
  padding: 3rem 0rem;
  min-height: 60vh;
  position: relative;
`

const DIVF = styled.div`
  margin-top: auto;
`

class App extends Component {
  render() {
    return (
      <Containz>
        <DIVN><Navigator /></DIVN>
        <DIVM><Main /></DIVM>
        <DIVF><Footer /></DIVF>
      </Containz>
    );
  }
}

export default App;
