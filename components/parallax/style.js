import styled from "styled-components";

export const Pparallax = styled.div`

margin-top : 3.3em;
padding : 1.5em;
padding-top : 4em;
padding-bottom : 3em;

font-size: 1.5rem; 
line-height: 2rem; 

box-shadow: inset 0 0 5px 0 black;

min-height: 30em;

// background-image : url('./creepystick.png');
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

@media(max-width : 460px){
    font-size : 1.5rem;
    line-height: 2rem;
}
`

export const Red = styled.span`
    color : red;
`
export const Shine = styled.span`
    text-shadow : 0 0 6px red;
`

export const TopFlex = styled.div`
    display : flex;

    animation : easeTop 1.2s ease-in 0s forwards;

    @keyframes easeTop{
        0%{
            transform : translateY(-200%);
        }
        100%{
            transform : translateY(0);
        }
    }
`

export const LoadLeft = styled.hr`

    border: 1px solid red;

`
export const Gg = styled.div`
height:1000px;
font-size:36px
`