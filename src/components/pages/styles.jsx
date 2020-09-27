import styled from 'styled-components';

export const Title = styled.h1`
    color: rgb(9,83,133);
    text-align: center;
`

export const Text = styled.p`
    font-size: x-large;
`

export const Image = styled.img`
    padding: 2.5px;
    ${props => {
        switch(props.disappear) {
            case "medium":
                return '@media(max-width: 1200px){display: none;}';
        }
        return null;
    }}
`