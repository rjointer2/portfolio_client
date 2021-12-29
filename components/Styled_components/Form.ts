
import styled from "styled-components";
import { primary, white } from "./palette";

export const ContactFlexChild = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    h2 {
        padding-bottom: 5px;
    }
    
`;

export const Img = styled.img`
    height: 150px;
    width: 200px;

    @media screen and (max-width: 300px) {
        height: 90px;
        width: 120px;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
        width: 55vw;
        border: none;
        border-bottom: 1px solid;
        text-align: center;
        margin-bottom: 20px;
    }

    input::placeholder {
        text-align: center;
    }

    input:focus {
        color: ${primary};
        border-bottom: 1px solid;
    }

    textarea {
        width: 55vw;
        border-bottom: 1px solid;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    button {
        border: none;
        background-color: ${primary};
        color: ${white};
        padding: 10px;
    }


    // for the message inputs fields only

`;
