
import React from 'react'
import Game from '../Game/Game'
import { LandingH2 } from '../Landing/LandingStyles'
import { FlexChild, Flex_Container, TextCenter, Text, Game_Container } from '../Styled_components/Aligment'
import { Header2 } from '../Styled_components/Text'
import { text1 } from './configs/text'

export default function Front_End_Experience() {
    return (
        <Flex_Container>
            <FlexChild>
                <Header2>
                    Front End Development <br/>
                    Experience
                </Header2>
                <Text>
                    { text1 }
                </Text>
            </FlexChild>

            <FlexChild>
                <Game_Container>
                    <canvas></canvas>
                    { process.browser && <Game /> }
                </Game_Container>
            </FlexChild>
        </Flex_Container>
    )
}
