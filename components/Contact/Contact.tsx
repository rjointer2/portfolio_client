

import React from 'react';

// styles
import { Flex_Container } from '../Styled_components/Aligment';
import { Button, Form, H2, Img, Info, Inline, Input, TextArea } from './ContactStyles'

export default function Contact() {
    return (
        <Flex_Container>
            <Form>
                <Inline>
                    <H2 style={{ paddingLeft: '-10px' }} >Want to say something?</H2>
                    <Img src='./images/group.png' />
                </Inline>
                <Info>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Subject Name" />
                    <Input placeholder="Your Email" />
                </Info>
                <Info>
                    <TextArea placeholder="Either you're dropping a friendly message or looking to network, start writing here" />
                </Info>
                <Button>
                    Submit
                </Button>
            </Form>
        </Flex_Container>
    )
}

