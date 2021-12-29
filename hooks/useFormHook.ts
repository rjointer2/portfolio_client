
export const MessageForm = 'MessageForm';
export const SignUpForm = 'SignUpForm';
export const SignInForm = 'SignInForm';


export const initialFormState = {
    Type: 'MessageForm',
    errorMessage: '',
    MessageForm: { },
    SignUpForm: { },
    SignInForm: { }
}

export const formReducer = ( state: typeof initialFormState, action: { payload: React.ChangeEvent<HTMLInputElement>, type: string } ) => {

    const { name, value } = action.payload.target

    switch( action.type ) {
        case MessageForm: 
            return { ...state, [MessageForm]: { ...state.MessageForm, [name]: value } }

        default: return state
    }
}