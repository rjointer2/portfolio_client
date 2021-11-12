

import styled from "styled-components";
import { primary, secondary } from "./palette";

export const Flex_Container = styled.div`
    display: flex;
    justify-content: center;

    height: 800px;
    
    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

export const FlexChild = styled.div`
    @media screen and ( max-width: 500px ) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Game_Container = styled.div`
    @media screen and (max-width: 328px) {
        display: none;
    }
`;


// Text

export const TextCenter = styled.div`
    text-align: center;
`;

export const Text = styled.p`
    font-size: 12px;
    padding: 10px 0;
    overflow-wrap: break-word;
    inline-size: 150px;
`;

export const SmallText = styled.p`
    font-size: 9px;
`;