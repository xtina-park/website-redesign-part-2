import React from 'react'

import { useForm } from 'react-hook-form';

import styled from 'styled-components';

const Form = ({submitForm}) => {
    const {register, handleSubmit, errors} = useForm();
    
    const onSubmit2 = data => {
        console.log(data);
        submitForm();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit2)} noValidate>
            <input 
            type="email" 
            name="email"
            ref={register({
                required: {value: true, message: "No e-mail was entered :("},
                pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid e-mail address."}
            })}/>
            <input type="submit"/>
            {errors.email && <p>{errors.email.message}</p>}
        </form>
    )
}

export default Form
