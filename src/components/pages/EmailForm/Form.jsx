import React from 'react'
import { useForm } from "react-hook-form";

import styled from 'styled-components';

const Input = styled.input`
    
    height: 50px;
    margin: 10px 0px;
    padding: 10px;
    font-size: large;
    border: 2px solid ${props => props.theme.darkCerulean};

    @media only screen and (min-width: 1200px) {
        width: 45% !important;
        /* height: auto; */
    }

    @media only screen and (max-width: 1200px) {
        width: 75% !important;
        /* height: auto; */
    }

    &:hover, &:focus {
    outline-color: ${props => props.theme.lightBlu};
    }
    
`

const Button = styled.input`
    font-size: large;
    border-radius: 5px;
    background-color: lightgray;
    color: black;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.darkCerulean};
    border-radius: 3px;
    font-weight: 500;

    &:hover {
        background: ${props => props.theme.darkCerulean};
        border: 2px solid ${props => props.theme.darkCerulean75};
        color: white;
    }

    &:focus, &:active {
        outline-color: ${props => props.theme.lightBlu};
    }

`

const Error = styled.p`
    color: ${props => props.theme.darkCerulean};
    font-style: italic;
    font-size: x-large;
`

function Form({submitForm}) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit2 = data => {
        console.log(data);
        submitForm();
    }; 
    
    return (
        <div align='center'>
             <form onSubmit={handleSubmit(onSubmit2)} noValidate>
                <Input 
                    type="email" 
                    name="email"
                    placeholder="Your e-mail here"
                    ref={register({ 
                        required: {value: true, message:"No e-mail was entered :("},
                        pattern: {value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i, 
                        message: "Please enter a valid e-mail address"},
                    })}
                />
                <Button type="submit"/>
                {errors.email && <Error>{errors.email.message}</Error>}
            </form>
        </div>
    )
}

export default Form
