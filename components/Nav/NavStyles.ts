
import styled from "styled-components";

import { primary, secondary, white } from "../Styled_components/palette";

import { AiOutlineMenu } from 'react-icons/ai';

export const NavContainer = styled.nav`
    display: flex;
    color: ${white};
    background: ${primary};
    height: 80px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px;


    li {
        font-size: 10px;
        list-style: none;
        padding: 0 10px 0 10px;
    }

    @media screen and ( max-width: 400px ) {
        li:nth-child(n + 3) {
            display: none;
        }

        li:last-child {
            display: unset;
        }
    }

    @media screen and ( min-width: 401px ) {
        li:last-child {
            display: none;
        }
    }
`;

export const Flex = styled.div`
    margin-left: auto;
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

export const Hamburger = styled(AiOutlineMenu)``;