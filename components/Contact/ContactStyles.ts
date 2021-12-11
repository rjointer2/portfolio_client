
import styled from "styled-components";
import { primary, white } from "../Styled_components/palette";

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
    
    input {
        width: 50vw;
    }
`;

/* 
import styled from "styled-components";
import { primary, white } from "../Styled_components/palette";

export const Container = styled.div`
    
`;

export const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid ${primary};
    padding-bottom: 2px;
    width: 20vw;
    flex-basis: calc(50% - 40px);
    margin: 40px 10px 10px 0;

    
    &::placeholder {

    }
`;

export const TextArea = styled.textarea`
    outline: none;
    border: none;
    resize: none;

    border-bottom: 1px solid ${primary};
    padding-bottom: 2px;
    margin-top: 40px;

    width: 76.5%;
`;

export const Button = styled.button`
    margin-top: 20px;
    background-color: ${primary};
    border: none;

    height: 20px;
    width: 50px;

    color: ${white};
`;

export const Group = styled.div`
    @media screen and (min-width: 720px) {
        display: flex;
        flex-direction: column;
    }
`;

export const H2 = styled.h2`
    transform: translateY(90px);

    @media screen and (max-width: 720px) {
        transform: none;
    }
`;

export const Inline = styled.div`
    position: relative;
    display: flex;
    text-align: center;

    h2 {
        color: red;
        display: flex;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        white-space: nowrap;
    }

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }

    @media screen and (max-width: 300px) {
        font-size: 12px;

        h2 {
            transform: translateX(-20px);
        }
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
 */