import React from 'react'
import {
    HeroContainer,
    HeroH1,
    HeroH1Container,
    HeroP,
    HeroButton
} from './HeroSectionElements';
import Icon1 from '../../images/svg1.svg';
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroH1Container>
            <HeroH1>
                Vase onlajn prisustvo nam je vazno.
            </HeroH1>
            <HeroP>Sa nama ste sigurni da vas biznis dobija svu paznju koju zasluzuje.</HeroP>
            <HeroButton>
                NAS RAD
            </HeroButton>
            </HeroH1Container>
        </HeroContainer>
    )
}

export default HeroSection
