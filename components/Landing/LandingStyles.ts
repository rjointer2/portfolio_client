
import styled from "styled-components";
import { white } from "../Styled_components/palette";

export const Container = styled.div`
    color: ${white};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
    transform: translateY(-150px);
    padding-top: 60px;
`;

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: pink;
`;

export const Content = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LandingH2 = styled.h2`

    font-size: 20px;

    height: 55px;
    overflow: hidden;
    @media screen and (max-width: 760px) {
        font-size: 15px;
    }
    @media screen and (max-width: 420px) {
        font-size: 10px;
    }
    
`;

export const LandingScroll = styled.div`
    line-height: 60px;
    &:nth-child(1) {
        animation: scrolltext 15s infinite;
    }
    @keyframes scrolltext {
        0%{
          margin-top: 0;
        }
        12%{
            margin-top: -60px;
        }
        22%{
            margin-top: -120px;
        }
        33%{
            margin-top: -180px;
        }
        50%{
            margin-top: -240px;
        }
        62%{
            margin-top: -180px;
        }
        75%{
            margin-top: -120px;
        }
        83%{
            margin-top: -60px;
        }
        100%{
            margin-top: 0;
        }
    }
`;

export const Inline = styled.div`
    display: flex;
    line-height: 60px;
    margin-left: 10px;
`;