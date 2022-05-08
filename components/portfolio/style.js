import styled from "styled-components";

export const Parallax = styled.div`

overflow : visible;

margin-top : 4.3em;
padding : 0.8em;
padding-top : 2.3em;
padding-bottom : 3em;

font-size: 2.25rem; 
line-height: 2.5rem; 

box-shadow: inset 0 0 2em 2px black;

min-height: 100vh;

// background-image : url('./street.png');
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;


// @media(max-width : 460px){
//     background-position : ;
// }
`

export const Pink = styled.span`
    color : rgb(255, 0, 102);
`
export const Shine = styled.span`
    text-shadow : 0 0 6px rgb(255, 0, 102);
`
