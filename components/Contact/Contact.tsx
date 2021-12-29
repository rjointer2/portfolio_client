
// react
import React, { TextareaHTMLAttributes, useReducer, useState } from 'react';

// local state management
import { formReducer, initialFormState, MessageForm } from '../../hooks/useFormHook';

// components
import { FlexChild, Flex_Container } from '../Styled_components/Aligment';

// styles
import { ContactFlexChild, Form, Img } from '../Styled_components/Form'

export default function Contact() {


    const [ form, dispatchForm ] = useReducer( formReducer, initialFormState );
    console.log(form)



    return (
        <Flex_Container>
            <ContactFlexChild>
                <Img src='./images/group.png' />
                <h2>
                    Leave a message!
                </h2>
                <Form>
                    <input placeholder="Full Name" onChange={( e: React.ChangeEvent<HTMLInputElement> ) => dispatchForm({ type: MessageForm, payload: e })} name="MessageForm - Full Name" />
                    <input placeholder="Email" onChange={( e: React.ChangeEvent<HTMLInputElement> ) => dispatchForm({ type: MessageForm, payload: e })} name="MessageForm - Email" />
                    {/* intentionally converting the expression to 'unknown' first for type satification */}
                    <textarea placeholder="Write something" name="MessageForm - Message" onChange={( e: React.ChangeEvent<HTMLTextAreaElement> ) => dispatchForm(
                        { type: MessageForm, payload: e as unknown as React.ChangeEvent<HTMLInputElement> }) } 
                    />
                    <button>
                        Submit
                    </button>
                </Form>
            </ContactFlexChild>
        </Flex_Container>
    )
}
