

import styled from "styled-components";
import { secondary } from "./palette";

export const Flex_Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;;
    height: 80vh;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

export const FlexChild = styled.div`
    
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