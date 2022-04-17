import reactDom from "react-dom"
import React from "react"
import { Container } from "./style"


export default function GlassPanel(props) {
    return (
        <>
            <Container className="break-words"> 

                {props.text}
            
            </Container>         
        </>
    )
}