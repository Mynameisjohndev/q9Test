import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #a75293;
    -webkit-font-smoothing: antialiased;
  }
  
  body,input,textarea,button{
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }
 
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    /* width: 100%; */
    /* max-width: 536px; */
    background: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.24;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .img-modal{
    width: 400px;
    height: 400px;
    border-radius: 0.25rem;
  }

  .button-modal{
    cursor: pointer;
    border: 0;
    position: absolute;
    bottom: 91%;
    left: 85%;
    background: #c64fa9;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:hover {
    filter: brightness(0.7);
  }
  }

`;
