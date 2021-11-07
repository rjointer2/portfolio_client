

import React from 'react';
import { Background, Container, VideoBackground } from './LandingStyles';

// copmponents




export default function Landing() {
    return (
        <Container>
            <Background>
                <VideoBackground autoPlay loop muted src='./bg.mp4'/>
            </Background>
        </Container>
    )
}
