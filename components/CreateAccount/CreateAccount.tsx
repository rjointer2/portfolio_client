
import React, { useReducer } from 'react'
import { formReducer, initialFormState, SignUpForm } from '../../hooks/useFormHook';
import { useGlobalState } from '../../hooks/useGlobalState'
import { ContactFlexChild, Form, Img } from '../Styled_components/Form'
import { CloseButton } from '../Styled_components/Icons'

export default function CreateAccount() {

    // global state 
    const { state, dispatch } = useGlobalState();
    const { menu } = state;

    // form state
    const [ form, dispatchForm ] = useReducer( formReducer, initialFormState )

    return (
        <div>
            <ContactFlexChild>
                <CloseButton onClick={() => dispatch({ type: 'MENNU_SAVE_SCORE', payload: menu?.MENNU_SAVE_SCORE }) } />
                <Img src='./images/group.png' />
                <h2>
                    Create an account today!
                </h2>
                <Form>
                    <input placeholder="Create Username" name="Username"  onChange={( e: React.ChangeEvent<HTMLInputElement> ) => dispatchForm({ type: SignUpForm, payload: e })} />
                    <input placeholder="Enter Your Email" name="Email" onChange={( e: React.ChangeEvent<HTMLInputElement> ) => dispatchForm({ type: SignUpForm, payload: e })} />
                    <input placeholder="Create Password" name="Password" onChange={( e: React.ChangeEvent<HTMLInputElement> ) => dispatchForm({ type: SignUpForm, payload: e })} />
                    <input placeholder="Confirm Password" name="Confirm Password" onChange={( e: React.ChangeEvent<HTMLInputElement> ) => dispatchForm({ type: SignUpForm, payload: e })} />
                    <button>
                        Submit
                    </button>
                </Form>
            </ContactFlexChild>
        </div>
    )
}
