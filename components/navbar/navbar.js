import reactDom from "react-dom"
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Bar, Logo, MenuButton, ExtraNav, ExtraButton, Search, SearchBtn} from "./style"
import Link from "next/link"

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Button, Checkbox } from "@mui/material"

import Script from 'next/script'


export default function Navbar() {

  const [didMount, setDidMount] = useState(false)

  useEffect(() => {        
    setDidMount(true)
  }, [])

  
  
  if(didMount){
    return(
      <>
        <Script>{`
          
          function goaway(e) {
            if( document.getElementById("jhol").classList.contains("active") && e.target.id != "main" ){
              document.getElementById("jhol").classList.toggle("active");
              document.getElementById("jhol").classList.toggle("passive");
            }
          }

          if(typeof window !== 'undefined'){
            window.addEventListener("scroll", goaway);
            window.addEventListener("click", goaway);
          }

        `}</Script>


        <Bar id = "main" onClick={ ()=>{if(typeof window !== "undefined" ){document.getElementById("jhol").classList.toggle("active"); document.getElementById("jhol").classList.toggle("passive"); }} } className="break-words text-base">
          <Logo className="hover:animate-pulse" src = "/tron.png"/>
          <Link href="/#"><MenuButton >Home</MenuButton></Link>
          <Link href="#skills"><MenuButton >Skills</MenuButton></Link>
          <Link href="#portfolio"><MenuButton >Portfolio</MenuButton></Link>
          <Link href="#background"><MenuButton >Background</MenuButton></Link>
          <Link href="#contact"><MenuButton >Contact</MenuButton></Link>

          <div className="col-start-6 z-[1] col-end-7 items-center md:hidden flex justify-end"><MenuOutlinedIcon/></div>
          
        </Bar>
        
        
        <div id = "jhol" className="reveal passive w-[100%] z-[50] bg-[rgba(127,29,29,0)] rounded-md backdrop-brightness-[2] backdrop-blur-[5px]" >
          <ExtraNav onClick={ ()=>{if(typeof window !== "undefined"){document.getElementById("jhol").classList.toggle("active"); document.getElementById("jhol").classList.toggle("passive"); }} } >
            <ExtraButton  href="/#">Home</ExtraButton>
            <ExtraButton  href="#skills">Skills</ExtraButton>
            <ExtraButton  href="#portfolio">Portfolio</ExtraButton>
            <ExtraButton  href="#background">Background</ExtraButton>
            <ExtraButton  href="#contact">Contact</ExtraButton>
          </ExtraNav>
        </div>
      </>
    )
  }
}