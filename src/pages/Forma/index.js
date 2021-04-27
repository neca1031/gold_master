import React from 'react'
import ScrollToTop from '../../components/ScrollToTop';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    StyledFieldset,
    StyledTextArea,
    FormSelect,
    FormP,
    FormH2
} from './FormaElements';

const Forma = () => {
    return (
        <>
        <ScrollToTop />
            <Container>
                <FormWrap>
                    <FormH2>VOLELI BISMO DA CUJEMO OD VAS.</FormH2>
                    <FormP>Popunite formu, ili pisite nam direktno na lan@digital.rs</FormP>
                    <FormContent>
                        <Form action='#'>
                        {/* <FormH1>Posaljite upit za izradu sajta</FormH1> */}
                        <FormLabel htmlFor='for'></FormLabel>
                        <FormInput type='name' required placeholder="Vase ime i prezime"/>
                        <FormLabel htmlFor='for'></FormLabel>
                        <FormInput type='email' required placeholder="Vas e-mail" />
                        {/* <FormLabel htmlFor='for'></FormLabel>
                        <FormInput type='tel' required placeholder="Broj telefona"/>
                        <FormH1>Vrsta usluge</FormH1>
                        <StyledFieldset>
                            <legend>Vrsta usluge</legend> 
                            <label>
                                <input type='radio' value='veb_sajt' name='usluga' placeholder="Ime i prezime" />
                                Web sajt      
                            </label>
                            <label>
                                <input type='radio' value='drustvene' name='usluga' />
                                Društvene mreze
                            </label>
                            <label>
                                <input type='radio' value='SEO' name='usluga' />
                                SEO Usluge
                            </label>
                            <label>
                                <input type='radio' value='dizajn' name='usluga' />
                                Grafički dizajn
                            </label>
                            
                        </StyledFieldset>
                        
                        <FormLabel htmlFor='for'>Budžet</FormLabel>
                        <FormSelect>
                            <option value='500-1000e'>500-1000e</option>
                            <option value='1000-1500e'>1000-1500e</option>
                            <option value='1500-2000e'>1500-2000e</option>
                            <option value='2000e+'>2000e+</option>
    </FormSelect> */}
                        <FormLabel htmlFor='message'></FormLabel>
                        <StyledTextArea name='message' placeholder="Vasa poruka"/>
                        <FormButton type='submit'>Pošalji</FormButton>
                        {/* <Text>Nesto</Text> */}
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Forma;
