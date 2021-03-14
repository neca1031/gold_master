import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterStatic
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer id='kontakt'>
      {/* <FooterSubscription>
        <FooterSubHeading>
          PRIJAVITE SE ZA NAŠ NEWSLETTER
        </FooterSubHeading>
        <FooterSubText>Besplatne informacije iz sveta digitalnog marketinga.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Email adresa' />
          <Button fontBig primary>PRIJAVI SE</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Kontaktirajte nas</FooterLinkTitle>
            <FooterStatic >lan@digital.com</FooterStatic>
            <FooterStatic >Tadije Sondermajera 1</FooterStatic>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>O nama</FooterLinkTitle>
            <FooterLink to='/'>Prethodni projekti</FooterLink>
            <FooterLink to='/usluge'>Usluge</FooterLink>
            <FooterLink to='/forma'>Upit za izradu</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterSubscription>
        <FooterSubHeading>
          PRIJAVITE SE ZA NAŠ NEWSLETTER
        </FooterSubHeading>
        <FooterSubText>Besplatne informacije iz sveta digitalnog marketinga.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Email adresa' />
          <Button fontBig primary>PRIJAVI SE</Button>
        </Form>
      </FooterSubscription>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            LAN DIGITAL
          </SocialLogo>
          <WebsiteRights>LAN © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            {/* <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink> */}
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
