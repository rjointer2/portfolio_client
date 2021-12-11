

import React from 'react'
import { LandingH2 } from '../Landing/LandingStyles'
import { FlexChild, Flex_Container, TextCenter, Text } from '../Styled_components/Aligment'
import { Header2 } from '../Styled_components/Text'
import { text1 } from './configs/text'

export default function F_Experience() {
    return (
        <Flex_Container>
            <FlexChild>
                <Header2>
                    Full Stack Development <br/>
                    Experience
                </Header2>
                <Text>
                    { text1 }
                </Text>
            </FlexChild>

            <FlexChild>
               
            </FlexChild>
        </Flex_Container>
    )
}
