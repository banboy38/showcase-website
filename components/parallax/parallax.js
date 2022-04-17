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
                <div className="mb-4 hover:scale-[1.0125] bg-red-300 h-4 rounded-full opacity-70 hover:opacity-100 md:w-6/12"> <div className="bg-red-700 h-4 rounded-full" style={{width: props.val + "%"}}></div></div>
            </>
        )
    }


    
    if(didMount){
   
        return (
            <>
                <Pparallax id="skills" className="break-words">
                    {/* <div id = "khali"> */}
                        
                        <p className="text-6xl">Well then, this is the <Shine><Red>Skills</Red></Shine> section 📈</p>
                        
                        <p className="mt-4">See, I can make <Shine>isomorphic glass cards</Shine>, wild <Shine>animations and transitions</Shine>, weird <Shine>onHover sound queues</Shine> among many other <Red>bamboozling effects.</Red></p> 
                        <p>But I'm not gonna waste your time with my <Red>brilliance</Red>, I'll just make an <Red>impractically long list</Red> of my <Red>useful/useless</Red> <Red>skills</Red> and a <Red>progress bar</Red> for each. 🙂</p>
                        

                        
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

                <div style = {{textAlign:"center"}} className = "flex-column justify-center mt-[30vh] mb-[65vh] p-2 text-6xl">
                  <div className="flex flex-col m-2">
                      <p >As you can see, I'm the epitome of the saying</p>
                      <Red className="mt-[0.3em] portrait:mt-[1em]">"Jack of all Trades, Master of None."</Red>
                      {/* <p className="mt-[15px]">🥲</p> */}
                  </div>

                  <div className="text-2xl mt-[2em]"><Shine><Red>~"But Always Better than the Master of One"</Red></Shine></div>
                </div>
                                
            </>

        
        )
    }

}