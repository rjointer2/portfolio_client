
import styled from "styled-components";

export const Container = styled.div`
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
