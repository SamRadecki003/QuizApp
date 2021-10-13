import styled, { createGlobalStyle } from "styled-components";

import BGImage from "./images/water2.jpg";

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%; 
  }

  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px; 
    display: flex; 
    justify-content: center;
  } 

  *{
    box-size: border-box; 
    fonr-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    background-color: black;
    text-align: center ; 
  }
  h1{
    font-family: Fascinate Inline; sans-serif;
    background-image: linear-gradient(180deg, #fff, #FEDE00) ;
    background-size: 100%;
    background-clip: text; 
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent ; 
    -moz-background-clip: text ; 
    -moz-text-fill-color: transparent ; 
    filter: drop-ShadowRoot(2px 2px #0085a3) ; 
    font-size: 70px; 
    font-weight: 400; 
    text-align: center ; 
    margin: 20px; 
  
  }
`;
