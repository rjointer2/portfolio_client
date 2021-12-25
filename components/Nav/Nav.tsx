
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Logo from '../Logo/Logo'
import { Flex, Hamburger, HoverArhcor, NavContainer,  } from './NavStyles'

export default function Nav() {

    const hover = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        
        if(!hover){
            return;
        } else {
            const line = document.querySelector(`.${hover.current?.getAttribute("class")?.split(" ")[1]}`) as HTMLDivElement
            const listItems = document.querySelectorAll('nav li');

            const hoverUnder = ( a: HTMLDivElement ) => {
                line.style.left = a.offsetLeft+"px"; 
                line.style.width = a.offsetWidth+"px";
            }

            listItems.forEach( listItem => {
                listItem.addEventListener('mouseenter', ( e ) => hoverUnder(e.target as HTMLDivElement )  )
            })
        }

        

    }, [hover])


    return (
        <NavContainer>
            <HoverArhcor ref={hover}/>
            <li>
                <Logo/>
            </li>
            <Flex/>
            <li>
                About
            </li>
            <li>
                Scary Cat Game
            </li>
            <li>
                Contact
            </li>
            <li>
                <Hamburger/>
            </li>
        </NavContainer>
    )
}
