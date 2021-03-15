import styled from 'styled-components';

export const AboutContainer = styled.div`
 height: 70vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 object-fit: contain;
 min-height: 692px;
 position: relative;
 bottom: 0;
 left: 0;
 right: 0;
 top: 0;
 z-index: 0;
 overflow: hidden;
 background: #fff;
`

export const AboutWrap = styled.div `
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin-bottom: 30px;
 border: none;

 @media screen and (max-width: 400px) {
     height: 80%auto;
 };
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

 @media screen and (max-width: 760px) {
     font-size: 55px;
     margin-top: 0px;
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

 @media screen and (max-width: 760px) {
     font-size: 26px;
     margin-top: 10px;
     margin-left: 10px;
 }
`

export const AboutP1 = styled.p`
 font-size: 14px;
 font-family: 'Montserrat';
 text-align: center;
 width: 50%;
 margin-top: 30px;
 @media screen and (max-width: 400px) {
     font-size: 10px;
 };

 
`
export const AboutP2 = styled.p`
 font-size: 14px;
 font-family: 'Montserrat';
 text-align: center;
 margin-top: 30px;
 width: 50%;
 @media screen and (max-width: 400px) {
     font-size: 10px;
 };
`