import React from 'react';
import { Link } from 'react-router-dom';
import {
    KlijentiContainer,
    KlijentiSec,
    Container,
    KlijentiRow,
    KlijentiColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Button,
    
} from './KlijentiElements';
import Icon2  from '../../images/pks.jpeg';
const Klijenti = () => {
    return (
        <KlijentiContainer>
        <KlijentiSec id = 'klijenti'>
            <Container>
                <KlijentiRow>
                    <KlijentiColumn>
                        <TextWrapper>
                            <TopLine>Neki od naših klijenata</TopLine>
                            <Heading>Porsche Klub Srbija</Heading>
                            <Subtitle>Naš prvi klijenat bio je Porsche Klub Srbija. Ponosni smo što su izabrali baš nas za izradu njihovog sajta.</Subtitle>
                            <Link href={
                'http://cms.porsche-clubs.com/PorscheClubs/pc_serbia/pc_main.nsf/web/C12581100034FAE3C1257EFA003F7CC4'
              }
              rel='noopener noreferrer'
              target='_blank'>
                                <Button>
                                    Posetite njihov sajt
                                </Button>
                            </Link>
                        </TextWrapper>
                    </KlijentiColumn>
                    <KlijentiColumn>
                        <ImgWrapper>
                        <Img src={Icon2}/>
                        </ImgWrapper>
                    </KlijentiColumn>
                </KlijentiRow>
            </Container>
        </KlijentiSec>
        </KlijentiContainer>
    )
}

export default Klijenti
