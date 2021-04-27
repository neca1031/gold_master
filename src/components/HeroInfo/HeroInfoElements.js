import styled from 'styled-components';

export const HeroContainer = styled.div `
 background-color: #e1f1ff;
 height: 50vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 object-fit: contain;
`
export const HeroH1Container = styled.div `
 background-color: white;
 height: 90%;
 width: 77%;
 /* margin-top: 20px; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: start;
 object-fit: contain;
`

export const HeroH1 = styled.h1 `
 color: black;
 font-size: 60px;
 margin-left: 20px;
 /* margin-top: -120px; */
 font-family: 'Montserrat';
 
 text-align: start;

 @media screen and (max-width: 960px) {
     font-size: 50px;
     /* margin-top: -130px; */
     
     text-align: start;
 }
 @media screen and (max-width: 760px) {
     font-size: 50px;
     margin-top: 0px;
     
     text-align: start;
 }
 `
 export const HeroP = styled.p `
 color: gray;
 font-size: 20px;
 margin-top: 40px;
 width: 50%;
 margin-left: 20px;
 margin-bottom: 70px;
 font-family: 'Montserrat';
 
 text-align: start;

 @media screen and (max-width: 960px) {
     
 }
 @media screen and (max-width: 760px) {
     
 }
`
