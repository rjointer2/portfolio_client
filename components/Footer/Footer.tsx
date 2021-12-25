

import React from 'react'

// next
import Link from 'next/dist/client/link';

// styles
import { TextCenter } from '../Styled_components/Aligment';
import { Anchor, Container, Flex_Footer } from './FooterStyles';
import { SmallText } from '../Styled_components/Text';

// icons 
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';


export default function Footer() {
    return (
        <Container>
            <TextCenter>
                <SmallText>
                    <br/> Thank you for stopping by and please don't hesitate
                    <br/> to view my socials below!
                    <br/><br/>
                </SmallText>
            </TextCenter>
            <Flex_Footer>
                <Link href="/" ><Anchor> <AiFillGithub /> <br/> Github </Anchor></Link>
                <Link href="/" ><Anchor> <AiFillLinkedin /> <br/> LinkedIn </Anchor></Link>
                <Link href="/" ><Anchor> <CgMail /> <br/> Gmail </Anchor></Link>
                <Link href="/" ><Anchor> <AiOutlineTwitter /> <br/> Twitter </Anchor></Link>
            </Flex_Footer>
            <TextCenter>
                <SmallText>
                    <br/> Designed and Developed By Roosevelt Jointer
                </SmallText>
            </TextCenter>
        </Container>
    )
}
