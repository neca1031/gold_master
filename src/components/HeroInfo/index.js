import React from 'react'
import {
    HeroContainer,
    HeroH1,
    HeroH1Container,
    HeroP,
} from './HeroInfoElements';

const HeroInfo = () => {
    return (
        <HeroContainer>
            <HeroH1Container>
            <HeroH1>
                Cime se mi bavimo?
            </HeroH1>
            <HeroP>Nasa specijalnost je izrada brzih i funkcionalnih veb sajtova.
                Vase ideje realizujemo pomocu naseg znanja.
            </HeroP>
            </HeroH1Container>
        </HeroContainer>
    )
}

export default HeroInfo