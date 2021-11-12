

import React from 'react';

// styles
import { Flex_Container } from '../Styled_components/Aligment';
import { Button, Container, Form, H2, Img, Info, Inline, Input, TextArea } from './ContactStyles'

export default function Contact() {
    return (
        <Container>
            <Form>
                <Inline>
                    <h2>
                       Leave a message!
                    </h2>
                    <Img src='./images/group.png' />
                </Inline>
                <div>
                <Info>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Subject Name" />
                    <Input placeholder="Your Email" />
                </Info>
                </div>
                <TextArea placeholder="Either you're dropping a friendly message or looking to network, start writing here" />

                <Button>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

