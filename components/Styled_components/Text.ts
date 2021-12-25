
import styled from "styled-components";
import { primary, secondary } from "./palette";

export const Text = styled.p`
    font-size: 12px;
    padding: 10px 0;
    overflow-wrap: break-word;
    inline-size: 150px;

    a {
        font-size: 9px;
        color: ${primary};
    }
`;

export const SmallText = styled.p`
    font-size: 9px;
`;

export const Header = styled.h2`
    text-align: center;
    border-bottom: 1px solid ${primary};
    margin: 20px;
    padding-bottom: 5px;
    color: ${primary};
    
`;