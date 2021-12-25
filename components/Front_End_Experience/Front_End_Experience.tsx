
// react 
import React from 'react'

// components
import Game from '../Game/Game'
import { FlexChild, Flex_Container, Game_Container } from '../Styled_components/Aligment'

// styles
import { FlexItems } from './Front_End_Experience_Styles';
import { Header, Text } from '../Styled_components/Text';

export default function Front_End_Experience() {
    return (
        <div>
            <Header>
                Front End Development
                Experience
            </Header>
            <Flex_Container>
                <FlexChild>
                    <h4>
                        Scary Cat Mini Game <br/>
                    </h4>
                    <Text>
                        Created Modern Reusable Components for users
                        to interact with canvas API interface. <br/>
                        Built and Maintain State for Game Componenet with
                        effiecent usage of React Native Hooks <br/>
                    </Text>

                    <h4>
                        Todo Heroku App <br/>
                    </h4>
                    <Text>
                        Simple Todo Application utilizing Typescript, React,
                        Next, and Apollo Client to create a user interface 
                        for serving paginated data on the client side 
                        with CRUD functionally. <br/>
                        Created Modern Reusable Components for users
                        to interact with CRUD API server <br/>
                        Ulitize Client GraphL Hooks to view data with
                        user interface <br/>
                        Implemented React Ecosystem 3rd party packages 
                        to create infinite scroll for user's content <br/>
                        <a>https://todoroody.herokuapp.com/</a>
                    </Text>
                </FlexChild>

                <FlexChild>
                    <Game_Container>
                        <h2>
                            Scary Cat Mini Game <br/>
                        </h2>

                        <Text>
                            This is a mini game created completely with React.
                            Jump over the evil mice and obtain the highest score!
                            <br/>
                        </Text>
                        <FlexItems>
                                <FlexChild>
                                    <h3>
                                        Objective
                                    </h3>
                                    <ul>
                                        <li> <Text>Jump Over Rats </Text> </li>
                                        <li> <Text>Obtain Highest Score</Text> </li>
                                    </ul>
                                </FlexChild>
                                <FlexChild>
                                    <h3>
                                        Controls
                                    </h3>
                                    <ul>
                                        <li> <Text> W - Jump </Text> </li>
                                    </ul>
                                </FlexChild>
                        </FlexItems>
                        <Text>
                            Enjoy!
                        </Text>

                        <canvas></canvas>
                        { process.browser && <Game /> }
                    </Game_Container>
                </FlexChild>
            </Flex_Container>
        </div>
    )
}
