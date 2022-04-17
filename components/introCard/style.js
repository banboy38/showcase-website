import styled from "styled-components"


export const Paper = styled.div`

    // text-align : center;

    // overflow : hidden;

    background-color : transparent;

    font-size: 2.25rem; 
    line-height: 2.5rem; 

    margin: 1.5rem;
    margin-top : 3.7em;

    
    
    margin-bottom : 5em;
    // padding-bottom : 2.5em;

    min-height : 100vh;

    @media (max-width: 740px) {
        margin-top: 47vh;
        padding-bottom : 9em;
        font-size : 1.875rem;
        line-height: 2.25rem;
    }

    // @media(max-width : 460px){
    //     font-size : 1.875rem;
    //     line-height: 2.25rem;
    // }
`

export const HelloHead = styled.div`
    // overflow : visible;
    background-color : transparent;
    opacity : 0;

    animation: fadeRightt 0.5s ease-out 0s forwards;

    @keyframes fadeRightt {
        from {
            
            transform: translateX(-5%);
            
        }
        to {
            transform: translateX(0);
            
            opacity : 1;
        }
    } 
`

const start = 1.7;

export const TypedTextOne = styled.div`


    opacity : 0;

    animation: typing 1s ease ${start}s forwards;

    @keyframes typing {
        from { 
            
        }
        to {
            opacity : 1;
        }
    }
`

export const TypedTextTwo = styled.div`

    opacity : 0;

    animation: typing 1s ease ${start+1+0.5}s forwards;

    @keyframes typing {
        from {
        }
        to { 
            opacity : 1;
        }
    }
`

export const TypedTextThree = styled.div`

    opacity : 0;

    animation: typing 1s ease ${start+2+1}s forwards;

    @keyframes typing {
        from {
            
        }
        to { 
            opacity : 1;
        }
    }
`

// ------------------------------------------------------------------------------------------------------------

export const CenterContainer = styled.div`
    background-color : transparent;
    
    display : flex;
    align-axis : center;
    justify-content : right;
    align-items : baseline;
    flex-wrap : wrap;
    
    opacity : 0;
    
    margin-top : 20vh;

    animation: bounce 0.9s ease-out ${start+3+1.5}s forwards;

    @keyframes bounce {
    0% {
        
        transform: translateY(-200%);
        
    }
    95% {
        transform : translateY(5%);
    }
    100% {
        transform: translateY(0);
        
        opacity : 1
    }
    }

    @media(max-width:740px){
        display : block;
    }
`
export const Highlight = styled.span`

    color : red;
    text-shadow : 0 0 6px red;

    animation : highlightt 1.5s ease 5.5s forwards;

    @keyframes highlightt{
        0% {
            // color : red;
            background-color : transparent;
        }

        50% {
            color : white;
            background-color : rgba(255,0,0,0.5);
            border-radius : 0.2em

        }

        100% {
            color : red;
            
            text-shadow : 0 0 6px red;
        }
    }
    
`

export const HighlightTwo = styled.span`

    color : red;
    text-shadow : 0 0 6px red;
    animation : highlight 1.5s ease 7.5s forwards;

    @keyframes highlight{
        // 0% {
        //     color : white;
        //     background-color : transparent;
        // }

        // 33% {
        //     color : red;
        //     background-color : white;
        // }

        // 66% {
        //     color : white;
        //     background-color : red;
        // }

        // 100% {
        //     color : white;
        //     background-color : transparent;
        // }

        0% {
            // color : red;
            background-color : transparent;
        }

        50% {
            color : white;
            background-color : rgba(255,0,0,0.5);
            border-radius : 0.2em

        }

        100% {
            color : red;
            
            text-shadow : 0 0 6px red;
        }
    }
    
`


export const CenterContainerr = styled.div`
    background-color : transparent;
    display : flex;
    align-axis : center;
    justify-content : center;
    

    // padding : 0.2em;

    opacity : 0;

    animation: easeRight 2.5s ease-in 7s forwards;

    @keyframes easeRight {
        from {
            margin-right : -40em;
        }
        to {
            margin-right : 0em;
            opacity : 1;
        }
    }

`

export const GoUp = styled.span`
    
    opacity : 0.3;

    width : 32px;
    z-index: 30;
    justify-items: center;

    position : fixed;
    bottom: 1em;
    right: 50%;

    mix-blend-mode: difference;

`