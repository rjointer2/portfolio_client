
import styled from "styled-components";

import { primary, secondary, white } from "../Styled_components/palette";

import { AiOutlineMenu } from 'react-icons/ai'

export const NavContainer = styled.div`
    color: ${white};
    background: ${primary};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    max-width: 1100px;

    @media screen and (min-width: 720px) {
        flex-direction: column;
    }
`;

export const NavUL = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 12px;
    white-space: nowrap;


    @media screen and (max-width: 720px) {
        li:nth-child(n + 3) {
            display: none;
        }
    }

`;

export const NavLI = styled.li`
    padding: 0 10px 0 10px;
`;

export const HoverArhcor = styled.div`
    position: absolute;
    height: 4px;
    left: 0;
    width: 0;
    background: #f6a3d1;
    bottom: 1em;
    transition: .6s;
    border-radius: 4px;
    transform: translateY(.7em);

    @media screen and (max-width: 400px) {
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    margin-right: 50vw;

    @media screen and (max-width: 200px) {
        margin-right: 1vw;
    }
`;

export const NavMenuBurger = styled(AiOutlineMenu)`
    @media screen and (min-width: 720px) {
        display: none;
    }
`;