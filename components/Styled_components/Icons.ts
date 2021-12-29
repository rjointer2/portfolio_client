
import styled from "styled-components";

import { FaTimes } from "react-icons/fa";
import { primary } from "./palette";

export const Icons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Icon = styled.div`
    font-size: 3rem;
    padding: 8px;
`;


export const CloseButton = styled(FaTimes)`
    color: ${primary};

    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;

    &.active {
        transition: all 0.2s ease-in-out;
    }
`;