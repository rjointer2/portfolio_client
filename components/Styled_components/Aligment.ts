

import styled from "styled-components";
import { primary, secondary } from "./palette";

export const Flex_Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-height: 600px;
    padding: 50px 0 50px 0;

    @media screen and ( max-width: 560px ) {
        flex-direction: column;
        align-items: center;
    }
    
`;

export const FlexChild = styled.div`

    @media screen and ( max-width: 560px ) {
        h2 {
            text-align: center;
        }
    }


    ul {
        padding-left: 20px;
    }


`;

export const Game_Container = styled.div`
    @media screen and (max-width: 328px) {
        display: none;
    }
`;


export const TextCenter = styled.div`
    text-align: center;
`;
