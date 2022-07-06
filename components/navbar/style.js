import Image from "next/image"
import styled from "styled-components"


export const Bar = styled.div`

    outline : none;

    position : fixed;
    top : 0;
    width : 98.7%;

    display : grid;
    grid-template-columns: 40px repeat(5, 1fr); // 40px;
    grid-gap : 1em;
    
    margin : 0.5em;
    padding : 0.625em;

    color : white;

    background-color : transparent;
    opacity : 0.9;

    border-style : solid;
    border-width : 0.1em;
    border-color : white;
    border-radius : 0.625em;

    border-right : none;
    border-left : none;
    
    // transition : opacity 5s ease-in-out;
    &:hover{
      opacity : 1;
      box-shadow: 0 0 0.3px white ;
    //   border-radius : 0em;
    //   clip-path: inset(0 10px 0 10px);
    }

    animation: blink 1.8s ease 0.5s ;

    @keyframes blink{
        0% {
            opacity : 0.9;
        }

        50% {
            opacity : 1;
            border-radius : 0em;
        }

        100% {
            opacity : 0.9;
        }

    }

    transition : border 0.8s linear, opacity 0.5s ease-in-out;
    z-index: 50;
    @media (max-width: 768px) {
        // position : fixed;
        // top : 0;
        width : 96.5%;
        position : relative;

        border-top : none;
        border-bottom : none;

        border-left : solid;
        border-right : solid;
    }

`

export const Logo = styled.img`
    // position : fixed;
    
    height : 2em;
    width : 2em;
    margin : 0.1em;

    
`

export const MenuButton = styled.a`
    cursor: pointer;
    outline : none;
    // background-color : #0d0d0d;
    padding-top : 0.3em;
    border-radius : 5em;
    border-color : red;
    text-align : center;

    transition : letter-spacing 0.3s;
    // transition : font-weight 0.35s;

    &:hover{
        font-weight: 600;
        letter-spacing: 0.05em;
        // font-size : 1.03em;
        // background-color : #150000;

        // color : red;

        border-style : solid;
        border-width : 3px;        
        border-top : none;
        border-bottom : none;

        box-shadow: 0 0 8em #990000 ;
    }

    // transition : display 1s ease-in-out;
    @media (max-width: 767px) {
        display : none;
      }

    // animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    // @keyframes pulse {
    //     0% {
    //         background-color : inherit;

    //         opacity: .5;
    //     }
    //     100% {

    //         background-color : #cc0000;
    //         box-shadow: 0 0 8em #660000;
    //         opacity: 1;
    //     }
    // }


`

// -----------------------------------------------------------------------------------------------------------------

export const Search = styled.input`

    text-align : center;
    // grid-column : 10 / 12;

    border : none;
    border-radius : 2em 0em 0em 2em;
    outline : none;

    type : text;
    
    color : white;
    background-color : #0d0d0d;

    @media (max-width: 740px) {
        display : none ;
    }
`

export const SearchBtn = styled.button`
    outline : none;

    text-align : center;
    // grid-column : 12 / 14;

    transition : background-color 0.5s, font-weight 0.2s;

    border-radius : 0em 2em 2em 0em;
    
    background-color : #4d0000;
    &:hover{
        font-weight: 600;
        background-color : #990000;
        box-shadow: 0 0 8em #660000 ;
    }

    @media (max-width: 740px) {
        display : none ;
    }
    
    // transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    // transition-duration: 300ms;
    // transition-delay: 150ms;
`

export const ExtraNav = styled.div`

    background-color : rgba(0,0,0,0.6);
    opacity:0.8;
    display : flex;
    flex-direction : column;

    margin : 0.5em;
    padding : 0.625em;

    width : 96.5%;
    
    // font-size: 2.5rem; 
    line-height: 3rem;

    min-height : 88vh;

    border-style : solid;
    border-width : 0.15em;
    border-color : white;
    border-radius : 0em 0em 0.625em 0.625em;

    border-top : none;
    border-bottom : none;

    text-align : center;

    @media(min-width: 767px){
        display : none;
    }

`
export const Ch = styled.input`
    type : checkbox;
`
export const ExtraButton = styled.a`
    
    outline : none;
    margin : 0.5em;
    
    border-radius : 5em;
    border-color : red;
    text-align : center;

    
    border-width : 2px;        
    border-top : none;
    border-bottom : none;

    font-weight : 600;

    box-shadow: 0 0 1em rgba(255,0,0,0.1) ;
`