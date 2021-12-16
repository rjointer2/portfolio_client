
// react 
import React from 'react'

// components
import Game from '../Game/Game'
import { FlexChild, Flex_Container, TextCenter, Text, Game_Container } from '../Styled_components/Aligment'

// styles
import { Header2 } from '../Styled_components/Text'
import { FlexItems } from './Front_End_Experience_Styles'

export default function Front_End_Experience() {
    return (
        <Flex_Container>
            <FlexChild>
                <Header2>
                    Front End Development <br/>
                    Experience
                </Header2>
                <h4>
                    Scary Cat Mini Game <br/>
                </h4>
                <Text>
                    Created Modern Reusable Components for users
                    to interact with canvas API interface. <br/>
                    Built and Maintain State for Game Componenet with
                    effiecent usage of React Hooks <br/>
                    Used Functional Programming Principles to create
                    high performance in update state without mutation
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
                        Ulitilizing functional programming principles, managing
                        state in a modern clean architecture with native React Hooks
                        and HTML Canvas API. Play and see if you can get the highest 
                        score!
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
    )
}
