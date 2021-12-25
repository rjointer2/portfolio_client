
// react
import React from 'react';

// components
import { FlexChild, Flex_Container } from '../Styled_components/Aligment';

// styles
import { ContactFlexChild, Form, Img } from './ContactStyles'

export default function Contact() {
    return (
        <Flex_Container>
            <ContactFlexChild>
                <Img src='./images/group.png' />
                <h2>
                    Leave a message!
                </h2>
                <Form>
                    <input placeholder="Full Name"/>
                    <input placeholder="Email"/>
                    <textarea placeholder="Write something"/>
                    <button>
                        Submit
                    </button>
                </Form>
            </ContactFlexChild>
        </Flex_Container>
    )
}
