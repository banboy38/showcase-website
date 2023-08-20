import reactDom from "react-dom"
import React , {useState, useEffect} from "react"
import styled from "styled-components"
import Link from "next/link"
import { Pparallax, Gg, TopFlex, LoadLeft, Red, Shine } from "./style"
import { LinearProgress, Button } from "@mui/material"
import { padding } from "@mui/system"
import Poka from "../../public/bwback.png"

export default function Parallax(props){

    const [didMount, setDidMount] = useState(false)

    useEffect(() => {        
      setDidMount(true)
    }, [])

    function ProgressBar(props) {
        return(
            <>
                <div className="mb-4 hover:scale-[1.025] duration-300 bg-red-300 h-4 rounded-full opacity-70 hover:opacity-100 md:w-6/12 cursor-pointer"> <div className="bg-red-700 h-4 rounded-full" style={{width: props.val + "%"}}></div></div>
            </>
        )
    }


    
    if(didMount){
   
        return (
            <>
                <Pparallax id="skills" className="bg-[url(/creepystick.png)] break-words select-none">
                    {/* <div id = "khali"> */}
                        
                        <p className="text-5xl md:text-6xl font-extrabold">Well then, this is the <Red className="cursor-pointer">Skills</Red> section 📈</p>
                        
                        <p className="mt-4 w-[90%]">See, I can make <Shine>isomorphic glass cards</Shine>, wild <Shine>animations and transitions</Shine>, weird <Shine>onHover sound queues</Shine> among many other <Red>bamboozling effects.</Red></p> 
                        <p className="w-[90%]">But I'm not gonna waste your time with my <Red>brilliance</Red>, I'll just make an <Red>impractically long list</Red> of my <Red>useful/useless</Red> <Red>skills</Red> and a <Red>progress bar</Red> for each. 🙂</p>
                        

                        
                        <div className="mt-[2.1em]">Programming Languages:</div>
                        <ul className="list-none m-10 leading-loose" style={{marginTop:"10px"}}>
                            <li>Python <ProgressBar val = "95"/></li>
                            <li>C/C++ <ProgressBar val = "70"/></li>
                            <li>Java <ProgressBar val = "80"/></li>
                        </ul>

                        <div className="mt-[2.1em]">Theory</div>
                        <ul className="list-none m-10 leading-loose" style={{marginTop:"10px"}}>
                            <li>DSA <ProgressBar val = "90"/></li>
                            <li>OOPS <ProgressBar val = "75"/></li>
                            <li>OS <ProgressBar val = "60"/></li>
                            <li>DBMS <ProgressBar val = "90"/></li>
                        </ul>

                        <div className="mt-[2.1em]">Scripting Languages:</div>
                        <ul className="list-none m-10 leading-loose" style={{marginTop:"10px"}}>
                            <li>HTML  <ProgressBar val = "97"/></li>
                            
                            <li>CSS <ProgressBar val = "95"/></li>
                            <li>JavaScript <ProgressBar val = "90"/></li>
                            <li>TypeScript <ProgressBar val = "90"/></li>
                            <li>PHP <ProgressBar val = "70"/></li>
                        </ul>
                        
                        <div className="mt-[2.1em]">Frameworks and Web Developement Tools:</div>
                        <ul className="list-none m-10 leading-loose" style={{marginTop:"10px"}}>
                            <li>React Library <ProgressBar val = "85"/></li>
                            <li>NextJs <ProgressBar val = "75"/></li>
                            <li>ExpressJs <ProgressBar val = "55"/></li>
                            <li>NodeJs <ProgressBar val = "60"/></li>
                            <li>MongoDB and NoSQL Databases <ProgressBar val = "67"/></li>
                            <li>MySQL and Relational Databases <ProgressBar val = "90"/></li>
                            <li>HTTP/REST/GraphQL APIs <ProgressBar val = "65"/></li>
                            <li>Django <ProgressBar val = "35"/></li>
                            <li>Flask <ProgressBar val = "40"/></li>
                        </ul>                    
                        
                        
                    {/* </div> */}
                </Pparallax>

                <div style = {{textAlign:"center"}} className = "select-none flex-column justify-center mt-[30vh] mb-[65vh] p-2 font-extrabold text-5xl md:text-6xl">
                  <div className="flex flex-col gap-5 m-2">
                      <p >As you can see, I'm the epitome of the saying</p>
                      <span className="md:hover:tracking-wider duration-300 cursor-pointer">
                        <Red className="mt-[0.4em] portrait:mt-[0.7em]">"Jack of all Trades, Master of None."</Red>               
                        <div className="text-2xl mt-[1em] "><Red>~"But Always Better than the Master of One"</Red></div>
                      </span>
                  </div>
                </div>
                                
            </>

        
        )
    }

}