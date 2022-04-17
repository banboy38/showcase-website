import reactDom from "react-dom";
import react, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import dynamic from "next/dynamic";
import Parallax from "../components/parallax/parallax";
// import GlassPanel from "../components/glassPanel/glassPanel";
import Navbar from "../components/navbar/navbar";
import IntroCard from "../components/introCard/introCard";
import { Red, Shine } from "../components/parallax/style";
import Portfolio from "../components/portfolio/portfolio";
import Bio from "../components/bio/bio"
import Contact from "../components/contact/contact";
import Head from "next/head";

// const Navbar = dynamic(
//     () => {
//       return import("../components/navbar/navbar");
//     },
//     { ssr: false }
//   )

  // const IntroCard = dynamic(
  //   () => {
  //     return import("../components/introCard/introCard");
  //   },
  //   { ssr: false }
  // )

  // const Parallax = dynamic(
  //   () => {
  //     return import("../components/parallax/parallax");
  //   },
  //   { ssr: false }
  // )
  // const GlassPanel = dynamic(
  //   () => {
  //     return import("../components/glassPanel/glassPanel");
  //   },
  //   { ssr: false }
  // )

export default function Welcome(){

    // function navbar() {
    //   const [didMount, setDidMount] = useState(false)

    //   useEffect(() => {        
    //     setDidMount(true)
    //   }, [])

    //   if(didMount){
    //     return (        
    //       <>
    //         <Navbar/>
    //       </>
    //     )
    //   }
      
    // }

    // function introCard() {
    //   const [didMount, setDidMount] = useState(false)

    //   useEffect(() => {        
    //     setDidMount(true)
    //   }, [])

    //   if(didMount){
    //     return (        
    //       <>
    //         <IntroCard/>
    //       </>
    //     )
    //   }
    // }
      
    

    return(
            <>  <Head>
                  <title>
                    Anirban Aditya Halder
                  </title>
                </Head>
                <Navbar/>              
                <IntroCard/>
                <Parallax/>
                <Portfolio/>
                <Bio/>
                <Contact/>
            </>      
    )
}

