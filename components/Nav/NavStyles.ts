
import styled from "styled-components";
import { primary, secondary } from "../Styled_components/palette";

export const NavContainer = styled.nav`
    color: ${secondary};
    background: ${primary};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    font-size: 20px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100vw;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavUL = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 720px) {
        display: none;
    }

`;

export const NavLI = styled.li`
    padding: 0 10px 0 10px;
`;