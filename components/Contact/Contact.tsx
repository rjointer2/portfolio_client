
// react
import React from 'react';

// components
import { FlexChild, Flex_Container } from '../Styled_components/Aligment';
import { Header2 } from '../Styled_components/Text';

// styles
import { Form, Img } from './ContactStyles'

export default function Contact() {
    return (
        <Flex_Container>
            <FlexChild>
                <Header2>
                    Leave a message!
                </Header2>
                <Img src='./images/group.png' />
                <Form>
                    <input placeholder="hi"/>
                </Form>
            </FlexChild>
        </Flex_Container>
    )
}

 /* 
 
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
 
 */