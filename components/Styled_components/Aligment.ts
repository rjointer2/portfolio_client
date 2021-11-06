

import styled from "styled-components";
import { secondary } from "../../styles/palette";

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }

`;

export const FlexChild = styled.div`
    background-color: ${secondary};
    margin: 1rem;
    height: 40%;
    width: 40%;
    overflow-wrap: break-word;    
`;