import React from 'react'
import { Nav,
         NavbarContainer,
         NavLogo,
         MobileIcon,
         NavMenu,
         NavItem,
         NavLinksR,
         NavLinksS,
         NavBtn,
         NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggleHome}>LAN DIGITAL</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        <NavLinksR to='/usluge'>
                            USLUGE
                        </NavLinksR>
                        </NavItem>
                        <NavItem>
                        <NavLinksS to='klijenti'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true">
                            KLIJENTI
                        </NavLinksS>
                        </NavItem>
                        <NavItem>
                        <NavLinksR to='/about'>
                            O NAMA
                        </NavLinksR>
                        </NavItem>
                        <NavItem>
                        <NavLinksS to='kontakt'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true">
                            KONTAKT
                        </NavLinksS>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/forma'>POŠALJITE UPIT</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
