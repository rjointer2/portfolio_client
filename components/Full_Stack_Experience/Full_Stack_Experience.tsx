

import React from 'react'
import { LandingH2 } from '../Landing/LandingStyles'
import { FlexChild, Flex_Container, TextCenter, Text } from '../Styled_components/Aligment'
import { text1 } from './configs/text'

export default function F_Experience() {
    return (
        <Flex_Container>
            <FlexChild>
                <h2>
                    Full Stack Development <br/>
                    Experience
                </h2>
                <Text>
                    { text1 }
                </Text>
            </FlexChild>

            <FlexChild>
               
            </FlexChild>
        </Flex_Container>
    )
}
