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
     font-size: 55px;
     margin-top: -130px;
     
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
  width: 600px;
  height: 600px;
  margin-bottom: 2px;
`