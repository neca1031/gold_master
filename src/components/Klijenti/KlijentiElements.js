import styled from 'styled-components';

export const KlijentiContainer = styled.div `
 background-color: #e1f1ff;
 height: 120vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 object-fit: contain;
`
export const KlijentiSec = styled.div`
 color: #fff;
 padding: 160px 0;
 background: white;
 `

 export const KlijentiRow = styled.div `
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
 `
 export const Container = styled.div`
 z-index: 1;
 width: 100%;
 max-width: 1300px;
 margin-right: auto;
 margin-left: auto;
 padding-right: 50px;
 padding-left: 50px;

 @media screen and (max-width: 991px) {
   padding-right: 30px;
   padding-left: 30px;
 }
`;
export const Button = styled.button`
  border-radius: 4px;
  background: #f77a3a;
  white-space: nowrap;
  padding: 14px 20px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #d4a600;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
 export const KlijentiColumn = styled.div `
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%auto;

  @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;
  }
 `

 export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
      padding-bottom: 65px;
  }
 `

 export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
 `

export const TopLine = styled.div`
color: #4B59F7;
/* color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')}; */
font-size: 18px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
/* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')}; */
color: #1c2237;
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
/* color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')}; */
color: #1c2237;
`
export const Link = styled.a`
`
