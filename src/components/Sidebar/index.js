import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarRoute,
    SidebarMenu,
    SidebarLinkR,
    SidebarLinkS,
    SideBtnWrap
} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkR to='/usluge'>
                        USLUGE
                    </SidebarLinkR>
                    <SidebarLinkS to='klijenti'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true" onClick={toggle}>
                        KLIJENTI
                    </SidebarLinkS>
                    <SidebarLinkR to='/about'>
                        O NAMA
                    </SidebarLinkR>
                    <SidebarLinkS to='kontakt'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={toggle}>
                        KONTAKT
                    </SidebarLinkS>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/forma'>POŠALJITE UPIT</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
