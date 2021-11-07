
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Logo from '../Logo/Logo'
import { HoverArhcor, LogoWrapper, NavContainer, NavLI, NavMenuBurger, NavUL, NavWrapper } from './NavStyles'

export default function Nav() {

    const hover = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        
        if(!hover){
            return;
        } else {
            const line = document.querySelector(`.${hover.current?.getAttribute("class")?.split(" ")[1]}`) as HTMLDivElement
            const listItems = document.querySelectorAll('nav ul li');

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
            <div></div>
            <NavWrapper>
                <NavUL>
                    <HoverArhcor ref={hover} />
                    <NavLI>
                        <LogoWrapper>
                            <Logo/>
                        </LogoWrapper>
                    </NavLI>
                    <NavLI>
                        Experience
                    </NavLI>
                    <NavLI>
                        Play Scared Kitty
                    </NavLI>
                    <NavLI>
                        Contact
                    </NavLI>
                    <NavMenuBurger />
                </NavUL>
            </NavWrapper>
        </NavContainer>
    )
}
