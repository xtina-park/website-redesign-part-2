import React, { useState } from 'react'
import { Container } from 'bootstrap-4-react';

import Form from './ContactForm/Form';
import Success from './ContactForm/Success';
// import Content from '.';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <Container>
            {!isSubmitted ? 
                <Form submitForm = {submitForm}/> :
                <Success/>
            }
        </Container>
    )
}

export default Contact
