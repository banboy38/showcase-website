import reactDom from "react-dom"
import React, { useEffect, useState } from "react"
import { CenterContainer, CenterContainerr,  HelloHead, GoUp, Highlight, HighlightTwo, Paper, TypedTextOne, TypedTextThree, TypedTextTwo} from "./style"
import Image from "next/image"
import Logo from "./style"
import Link from "next/link"

import Up from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Button } from "@mui/material"
import {Red} from '../parallax/style.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function IntroCard() {

    const [didMount, setDidMount] = useState(false)

    useEffect(() => {        
      setDidMount(true)
    }, [])
    
    const theme = createTheme({
      palette: {
        primary: {
          main: 'rgba(255,0,0,1)',
          darker: '#FF0000',
        },
        neutral: {
          main: '#FF0000',
          contrastText: '#FF0000',
        },
      },
    });

    if(didMount){

      

      return(
        <>
          <Paper className="break-words">
            <HelloHead className="text-6xl font-extrabold mt-[-40vh] md:mt-[2.2em] mb-4"><span style={{"color":"red"}}>Hemlo</span> there!<br/><Red>こんにちは</Red></HelloHead>
            
            <TypedTextOne >I&apos;m <span style = {{"color":"red", }}>Anirban Aditya Halder</span>, the <Red>God of Pessimism</Red> ❤️</TypedTextOne>
            <TypedTextTwo>And this is my <span style = {{"color":"red", }}>dreadful excuse</span> of a webpage made using <Highlight > [Next.Js] </Highlight></TypedTextTwo>
            <TypedTextThree>Well, it&apos;s mostly <HighlightTwo>[React.Js]</HighlightTwo> but <span style = {{"color":"red", }}>nevermind <span className="text-[0.8em]">🤙🏻</span></span></TypedTextThree>
            

            <Link passHref href="#skills">
            <CenterContainer className="text-6xl font-extrabold m-4 mt-[24vh] text-center cursor-pointer">
              <div className="m-2 animate-pulse" style = {{"color":"red", }}>Glhf</div>
              <div className="m-2 ">lezgo</div>
              <div className="flex justify-center mt-[20px]"><img alt = "Red Down Arrow" className="animate-pulse" style = {{height:"0.7em", width:"0.7em"}} src="./downArrow.png"/></div>
            </CenterContainer>          
            </Link>     
            
          </Paper>

          <a href="#" className="flex justify-center">
            <GoUp id="halp"><ThemeProvider theme={theme}><Button color="primary" variant="contained" sx={{borderRadius:"5em", padding:"16px",}}><Up sx={{fontSize:'16px'}} /></Button></ThemeProvider></GoUp>
          </a>
          
        </>
      )
    }
  }