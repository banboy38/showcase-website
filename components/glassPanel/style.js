import reactDom from "react-dom"
import React from "react"

import styled from "styled-components"
import Image from "next/image"




export const Container = styled.div`

    // transform : scale(0.95);
    
    // margin : 0.2em;
    // font-size : 1em;
    padding : 0.5em;
    // padding-left:0.8em;

    background-color: rgba(255, 0, 102, 0.17);

    border-radius : 0.5em;
    min-height : 5em;


    // box-shadow : 0 0 2em rgba(236, 72, 153, 0.2), inset 0 0 4em rgba(255,255,255, 0.05);



    // backdrop-filter: saturate(200%);
    // backdrop-filter: brightness(60%);
    backdrop-filter: blur(5px);

    // -webkit-backdrop-filter: saturate(200%);
    // -webkit-backdrop-filter: brightness(60%);
    -webkit-backdrop-filter: blur(5px);

    // transition : all 0.25s ease-in;
    // &:hover {
    //     transform : scale(1);
    // }

`

