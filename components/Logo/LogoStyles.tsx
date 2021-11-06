
import styled from "styled-components";

const arr = [1, 2, 3, 4, 5];

type I = {  i: number };

export const Span = styled.span<I>`
    --i: ${({ i }) => i};
`;

export const Wavy = styled.div`
    position: relative;
    letter-spacing: 3px;

    span {
        position: relative;
        display: inline-block;
        text-transform: uppercase;
        animation: wavy 1s ease-in-out infinite;
        animation-delay: calc(.1s * var(--i));
    }

    @keyframes wavy {
        0% {
            transform: translateY(0px);
        }
        20% {
            transform: translateY(-20px);
        }
        40% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @media screen and (max-width: 300px) {
        inline-size: 100px;
        overflow-wrap: break-word;
    }
`;


