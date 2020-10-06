import React, { Component } from 'react'

import styled from 'styled-components';

const Script = styled.h2`
    color: white;
    font-family: 'Amita', cursive;
    font-size: x-large;
    animation: appear 3s linear;
    animation-fill-mode:forwards;
    text-align: center;

    @keyframes appear{
        0% {color: white;}
        100% {color: ${props => props.theme.darkCerulean};}
    }
`

export default class Success extends Component {
    render() {
        return (
            <Script><br/>Thank you! Your e-mail has been added to the list.</Script>
        )
    }
}
