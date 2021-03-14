import styled from 'styled-components';

export const AboutContainer = styled.div`
 height: 70vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 object-fit: contain;
`

export const AboutH1 = styled.h1`
 color: #3d3eba;
 font-size: 64px;
 margin-top: -120px;
 font-family: 'Montserrat';
 margin-left: 10px;

 @media screen and (max-width: 960px) {
     font-size: 55px;
     margin-top: -80px;
     margin-left: 10px;
 }
`

export const AboutH2 = styled.h2`
 color: #3d3eba;
 font-size: 30px;
 margin-top: 30px;
 margin-bottom: 40px;
 font-family: 'Montserrat';
 margin-left: 10px;
`

export const AboutP1 = styled.p`
 font-size: 14px;
 font-family: 'Montserrat';
 text-align: center;
 width: 50%;
 margin-top: 30px;
`
export const AboutP2 = styled.p`
 font-size: 14px;
 font-family: 'Montserrat';
 text-align: center;
 margin-top: 30px;
 width: 50%;
`