
import styled from "styled-components";
import { StyledProps } from "../../typeDef";
import { primary } from "./palette";


export const BaseDropDown = styled.div<StyledProps>`
    padding: 15px;
    position: fixed;
    z-index: 999;
    width: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    background: white;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
    height: 100%;
`;


/*  */