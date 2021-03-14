import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
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

export const FormWrap = styled.div `
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

export const Icon = styled(Link)`
 margin-left: 32px;
 margin-top: 32px;
 text-decoration: none;
 color: #fff;
 font-weight: 700;
 font-size: 32px;

 @media screen and (max-width: 480px) {
     margin-left: 16px;
     margin-top: 8px;
 };

`

export const FormContent = styled.div `
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 border: none;

 @media screen and (max-width: 480px) {
     padding: 10px;
 }
`
export const Form = styled.form `
 background: #fff;
 max-width: 400px;
 height: auto;
 width: 100%;
 z-index: 1;
 display: grid;
 margin: 0 auto;
 padding: 80px 32px;
 border-radius: 4px;
 
 border: none;

 @media screen and (max-width: 400px) {
     padding: 32px 32px;
 };

`
export const FormH2 = styled.h1 `
 margin-bottom: 0px;
 color: #3d3eba;
 font-size: 40px;
 font-weight: 400;
 text-align: center;
 margin-top: 70px;
 `

export const FormH1 = styled.h1 `
 margin-bottom: 0px;
 color: #3d3eba;
 font-size: 24px;
 font-weight: 400;
 text-align: center;
 margin-top: -10px;
`

export const FormLabel = styled.label `
 margin-bottom: 8px;
 font-size: 14px;
 color: #3d3eba;
`

export const FormInput = styled.input `
 padding: 16px 16px;
 margin-bottom: 32px;
 border-color: #3d3eba;
 border-radius: 4px;
 border-width: thin;
 background-color: #e1f1ff;

 ::placeholder {
    color: #3d3eba;
 }
 
`

export const FormButton = styled.button `
 background: #f77a3a;
 padding: 16px 0;
 border: none;
 border-radius: 4px;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
 margin-top: 10px;

 &:hover {
    transition: all 0.3s ease-out;
    background: #d4a600;
    /* background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')}; */
  }
`

export const Text = styled.span `
 text-align: center;
 margin-top: 24px;
 color: #fff;
 font-size: 14px;

`

export const StyledFieldset = styled.fieldset`
 /* border: 1px solid #ddd; */
 /* border-radius: 5px; */
 border: none;
 padding: 10px;
 margin: 20px 0;
 display: grid;
  grid-template-columns: 1fr 1fr;

 legend{
     padding: 0 10px;
     color: white;
     font-size: 14px;

 }

 label {
     padding-right: 20px;
     color: #3d3eba;
     font-size: 14px;
 }

 input {
     margin-right: 10px;
     margin-left: 20px;
 }

`

export const StyledTextArea = styled.textarea`
background-color: #e1f1ff;
width: 100%;
min-height: 100px;
resize: none;
margin-bottom: 20px;
border-color: #3d3eba;
border-radius: 4px;
::placeholder {
    color: #3d3eba;
    
 }

`

export const FormSelect = styled.select`
 width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-color: #3d3eba;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #e1f1ff;
  

  option {
    color: #3d3eba;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    
  }
`