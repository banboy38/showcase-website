import tron from '../../public/tron.png'

import React, {useState, useEffect} from "react"
import {Bar, Logo, MenuButton, ExtraNav, ExtraButton, Search, SearchBtn} from "./style"


import Link from "next/link";
import Image from "next/image";

import { Button, Checkbox } from "@mui/material"

import Script from 'next/script'


export default function Navbar(props) {

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

        <Bar id = "main" onClick={ ()=>{if(typeof window !== "undefined" ){document.getElementById("jhol").classList.toggle("active"); document.getElementById("jhol").classList.toggle("passive"); }} } className="break-words select-none text-base backdrop-blur-[2.2px]">
          {/* <Logo className="hover:animate-pulse" alt="Logo" src = {tron}/> */}
          <div className="h-[2em] w-[2em] m-[0.1em] hover:animate-pulse"><Image alt="Logo" height={32} width={32} src={tron}/></div>
          <Link href="/#"><MenuButton >Home</MenuButton></Link>
          <Link href="#skills"><MenuButton >Skills</MenuButton></Link>
          <Link href="#portfolio"><MenuButton >Portfolio</MenuButton></Link>
          <Link href="#background"><MenuButton >Background</MenuButton></Link>
          <Link href="#contact"><MenuButton >Contact</MenuButton></Link>
          
        </Bar>
        
        
        <div id = "jhol" className="reveal select-none passive w-[100%] z-[50] bg-[rgba(127,29,29,0)] rounded-md backdrop-brightness-[2] backdrop-blur-[5px]" >
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