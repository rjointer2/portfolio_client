

import React from 'react';
import { Background, Container, Content, LandingH2, LandingScroll, VideoBackground, Inline } from './LandingStyles';

// copmponents




export default function Landing() {
    return (
        <Container>
            <Background>
                <VideoBackground autoPlay loop muted src='./bg.mp4'/>
            </Background>
            <Content>
                <h2>
                    Roosevelt Jointer
                </h2>
                <LandingH2>
                    <LandingScroll>
                        Team Player
                    </LandingScroll>
                    <LandingScroll>
                        Project Saver
                    </LandingScroll>
                    <LandingScroll>
                        Problem Solver
                    </LandingScroll>
                    <LandingScroll>
                        Web Scholar
                    </LandingScroll>
                    <LandingScroll>
                        Full Stack Dev
                    </LandingScroll>
                </LandingH2>
            </Content>
        </Container>
    )
}
