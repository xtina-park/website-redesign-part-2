import React, { Component } from 'react'

// import Content from '../.';

import styled from 'styled-components';

const DIVC = styled.div`
    position:absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    margin: auto;
    height: 20px; /*requires explicit height*/
    text-align: center;
`

const Script = styled.h2`
    color: white;
    font-family: 'Amita', cursive;
    font-size: xx-large;
    animation: appear 3s linear;
    animation-fill-mode:forwards;

    @keyframes appear{
        0% {color: white;}
        100% {color: black;}
    }
`

export default class Success extends Component {
    render() {
        return (
            <DIVC>
                <Script>Thank you! Your message has been sent.</Script>
            </DIVC>
        )
    }
}
