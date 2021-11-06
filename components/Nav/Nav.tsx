
import React from 'react'
import Logo from '../Logo/Logo'
import { NavContainer, NavLI, NavUL, NavWrapper } from './NavStyles'

export default function Nav() {
    return (
        <NavContainer>
            <NavWrapper>
                <Logo/>
                <NavUL>
                    <NavLI>
                        Experience
                    </NavLI>
                    <NavLI>
                        Play Scared Kitty
                    </NavLI>
                    <NavLI>
                        Contact
                    </NavLI>
                </NavUL>
            </NavWrapper>
        </NavContainer>
    )
}
