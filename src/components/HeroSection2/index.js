import React from 'react';
import {
    HeroContainer,
    HeroH1,
    HeroH2,
    HeroH1Container,
    HeroP,
    HeroButton
} from './HeroSection2Elements';
import Icon1 from '../../images/svg1.svg';
const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroH1Container>
            <HeroH1>
                Mladi i preduzimljivi.
            </HeroH1>
            <HeroH2>
                Vodjenje biznisa u digitalnom okruzenju ume biti komplikovano.
            </HeroH2>
            <HeroP>
                Ko Vam moze bolje pomoci u tome od tima strucnjaka koji je odrastao
                u digitalnom svetu.
            </HeroP>
            
            </HeroH1Container>
        </HeroContainer>
    )
}

export default HeroSection