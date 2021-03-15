import styled from 'styled-components';

export const HeroContainer = styled.div `
 background-color: #e1f1ff;
 height: 100vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 object-fit: contain;
`

export const HeroH1 = styled.h1 `
 color: #3d3eba;
 font-size: 80px;
 margin-top: -120px;
 font-family: 'Montserrat';
 
 text-align: center;

 @media screen and (max-width: 960px) {
     font-size: 50px;
     margin-top: -130px;
     
     text-align: center;
 }
 @media screen and (max-width: 760px) {
     font-size: 50px;
     margin-top: 0px;
     
     text-align: center;
 }
`
export const HeroButton = styled.button `
 border-radius: 4px;
  background: #f77a3a;
  white-space: nowrap;
  font-family: 'Montserrat';
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 22px 45px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #d4a600;
  }
`
export const HeroImage = styled.img`
 display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 40%;
  margin-bottom: 20px;
  margin-top: 50px;
  @media screen and (max-width: 960px) {
    width: 60%;
  height: 60%;
  margin-bottom: 10px;
  margin-top: 10px;
 }
`