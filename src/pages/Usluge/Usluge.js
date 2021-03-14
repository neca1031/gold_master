import React from 'react'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-1.svg';
import Icon4 from '../../images/svg-2.svg';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  HeaderContainer,
  UslugeH1,
  shapedividertop,
  Shape
} from './UslugeElements';
import './shape.css';
import ScrollToTop from '../../components/ScrollToTop';

const Usluge = () => {
    return (
        <>
        <ScrollToTop />
        <HeaderContainer>
            <UslugeH1>NAŠE USLUGE</UslugeH1>
        </HeaderContainer>
        <div class = "da">
        <div class="custom-shape-divider-top-1615675252">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
     </div>
        
        <PricingSection>
        <PricingWrapper>
          {/* <PricingHeading>Nase usluge</PricingHeading> */}
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon src={Icon1}/>
                <PricingCardPlan>Web development</PricingCardPlan>
                {/* <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Moderni web-sajtovi sa brzim vremenom učitavanja. Izgled sajta u potpunosti prilagođen vašim potrebama. Besprekorno korisničko iskustvo na posetioce će ostaviti odličan utisak.</PricingCardFeature>
                  {/* <PricingCardFeature>Odrzavanje sajta</PricingCardFeature>
                  <PricingCardFeature>Ui design</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Izaberi</Button> */}
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard >
              <PricingCardInfo>
              <PricingCardIcon src={Icon2}/>
                <PricingCardPlan>SEO</PricingCardPlan>
                {/* <PricingCardCost>SEO</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Imate odličan veb-sajt, ali niste zadovoljni brojem poseta? Vrlo je verovatno da vam je potreban Search Engine Optimization. Uz našu pomoć Vaš sajt će se pojavljivati na prvoj strani pretraživača i broj poseta će prirodno skočiti.
                  </PricingCardFeature>
                  {/* <PricingCardFeature>nesto</PricingCardFeature>
                  <PricingCardFeature>nesto</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Izaberi</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
              <PricingCardIcon src={Icon3}/>
                <PricingCardPlan>Digital Marketing</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Svaki biznis u vreme digitalnog doba mora biti i na društvenim mrežama.
                    Naš tim će se pobrinuti da vaši profili na društvenim mrežama budu svakodnevno ažurirani i posećeni.</PricingCardFeature>
                  {/* <PricingCardFeature>Promovisanje biznisa</PricingCardFeature>
                  <PricingCardFeature>Kreacija naloga na mrezama</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Izaberi</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
              <PricingCardIcon src={Icon4}/>
                <PricingCardPlan>Graphical Design</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Bez obzira da li vam je potreban novi logo, brošura ili sadržaj za društvene mreže, na Vama je samo da nam predstavite ideju, a naš tim će je sprovesti u delo.</PricingCardFeature>
                  {/* <PricingCardFeature>Snimanje i video editing</PricingCardFeature>
                  <PricingCardFeature>Photoshop</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Izaberi</Button> */}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
        </>
    )
}

export default Usluge
