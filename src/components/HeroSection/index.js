import React from 'react'
import {
    HeroContainer,
    HeroH1,
    HeroImage,
    HeroButton
} from './HeroSectionElements';
import Icon1 from '../../images/svg1.svg';
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroH1>
                MI GRADIMO VAŠ BIZNIS ONLINE
            </HeroH1>
            <HeroImage src={Icon1}/>
            <HeroButton>
                POŠALJITE UPIT
            </HeroButton>
        </HeroContainer>
    )
}

export default HeroSection
