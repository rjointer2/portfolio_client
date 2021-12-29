
// react
import React from 'react'

// styles
import { FlexChild, Flex_Container } from '../Styled_components/Aligment'

// icons 
import { GrMysql } from 'react-icons/gr';
import { SiExpress, SiGraphql, SiMongodb, SiTypescript, SiJavascript, SiReact, SiSass, SiRedux, SiCss3, SiBootstrap } from 'react-icons/si';
import { DiPhp } from 'react-icons/di';
import { Icon, Icons } from '../Styled_components/Icons';
import { Header, Text } from '../Styled_components/Text';


export default function F_Experience() {
    return (
       <div>
           <Header>
                Full Stack Development Experience
            </Header>
            <Flex_Container>
                <FlexChild>
                    <h4>
                        Todo Heroku App - Server Build
                    </h4>
                    <Text>
                        Simple Apollo GraphQL Server built with Typescript, 
                        and noSQL Mongo Database and ORM Mongoose. <br/>
                        Created type safe aggregation resolvers using GraphQL Frameworks <br/>
                        Model and Query Data with basic CRUD functions with NoSQL Mongo 
                        with Mongoose ORM <br/>
                        Encrpyted Sensitive Data with JWT and Brypt Framework over HTTP 
                        Request <br/>
                        <a>https://github.com/rjointer2/to_do_backend</a>
                    </Text>
                </FlexChild>

                <FlexChild>
                    <Icons>
                        <Icon><SiCss3/></Icon>
                        <Icon><SiJavascript/></Icon>
                        <Icon><SiMongodb/></Icon>
                        <Icon><DiPhp/></Icon>
                        <Icon><SiBootstrap/></Icon>
                        <Icon><SiTypescript/></Icon>
                        <Icon><GrMysql/></Icon>
                        <Icon><SiReact/></Icon>
                        <Icon><SiRedux/></Icon>
                        <Icon><SiSass/></Icon>
                        <Icon><SiExpress/></Icon>
                        <Icon><SiGraphql/></Icon>
                    </Icons>
                </FlexChild>
            </Flex_Container>
       </div>
    )
}
