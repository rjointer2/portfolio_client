

import styled from "styled-components";



export const Container = styled.footer`
       height: 30vw;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
`;

export const Flex_Footer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`;

export const Anchor = styled.a`
    padding: 0 10px 0 10px;
    text-decoration: none;
    font-size: 11px;
    text-align: center;
`;
