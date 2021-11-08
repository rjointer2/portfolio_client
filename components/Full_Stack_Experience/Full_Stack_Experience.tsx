

import React from 'react'
import { LandingH2 } from '../Landing/LandingStyles'
import { FlexChild, Flex_Container, TextCenter, Text } from '../Styled_components/Aligment'

export default function F_Experience() {
    return (
        <Flex_Container>
            <FlexChild>
                <h2>
                    Full Stack Development <br/>
                    Experience
                </h2>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum
                    </Text>
            </FlexChild>

            <FlexChild>
                <div style={{ height: 180, width: 320, background: 'gray' }} ></div>
            </FlexChild>
        </Flex_Container>
    )
}
