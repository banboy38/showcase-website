import { Red } from "../parallax/style"
import { Parallax, Pink, Shine } from "./style"
import { useState, useEffect } from "react"
import GlassPanel from "../glassPanel/glassPanel"
import { Button } from "@mui/material"

import { Container } from "../glassPanel/style"

import Script from 'next/script'


export default function Portfolio(props){

    const [didMount, setDidMount] = useState(false)

    useEffect(() => {        
      setDidMount(true)
    }, [])

    
      



    if(didMount){
        return (
            <>  
                <Script>
                {`
                    async function reveal() {
                        var reveals = document.querySelectorAll(".textAnim");
                      
                        for (var i = 0; i < reveals.length; i++) {
                          var windowHeight = window.innerHeight;
                          var elementTop = reveals[i].getBoundingClientRect().top;
                          var elementVisible = 0;
                          // console.log(elementTop, windowHeight, elementVisible);
                          if (elementTop < (90/100)*windowHeight) {
                            reveals[i].classList.add("active");
                          } else {
                            reveals[i].classList.remove("active");
                          }
                        }
                      }
                      
                      if(typeof window !== 'undefined'){
                        window.addEventListener("scroll", reveal);
                      }
                `}
                </Script>

            
                <Parallax id="portfolio" className="break-words">
                    <div id="oo" className="mt-2">
                    {/* w-[100%] md:w-[50%] */}
                        <div className=" text-left text-3xl md:text-[2.25rem]  break-words backdrop-brightness-[0.6] backdrop-blur-[5px] backdrop-saturate-200  rounded-3xl p-6 " style={{boxShadow : "0 0 2em rgba(236, 72, 153, 0.0), inset 0 0 4em rgba(255,255,255, 0.00)", backgroundColor : 'rgba(255, 0, 102, 0.17)'}} >
                            <p className="text-6xl">Welcome to the <Pink><Shine>Portfolio</Shine></Pink> section 🎨</p> 
                            <p className="mt-4">As I said a while ago, here's an <Shine>isomorphic glass card</Shine> made completely using <Pink>Tailwind CSS.</Pink></p>
                            <p>Now this <Pink>may not render</Pink> in <Pink>Mozilla Firefox</Pink> because this is <Pink>some experimental shit.</Pink></p>
                            <p>But trust me bro, it <Pink>actually exists.</Pink></p>
                            <p className="mt-1"><Pink>Thank you.</Pink></p>
                        </div>
                        
                    </div>

                    {/* <div className="flex justify-center mt-[4em] mb-[5px]"><img alt = "Red Down Arrow" className="animate-pulse" style = {{height:"0.7em", width:"0.7em"}} src="./pinkArrow.png"/></div> */}
                    {/* <div className="mt-[6em] mb[5px] w-full bg-pink-900 h-1 rounded-full"></div> */}
                    
                    <div className="textAnim mt-[2.4em] mb-[2em] text-6xl text-center">
                        My <Pink><>Projects</></Pink>
                    </div>

                    <div className="textAnim prnt mt-[0em] p-1 rounded-[0.5em] grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-2 ">

                        <a target = "_blank" href="https://github.com/banboy38/Cosmic" className="prnt2">
                          <Container className="chld" >
                            <div className="text-2xl md:text-[1em]">Tidbits</div>
                            <div className="fun text-2xl md:text-[0.625em] m-3">This unholy mess of <Pink>PHP, HTML,CSS and SQL</Pink> was the first site I developed. Just an ordinary blogging website with an extraordinarily confusing backend in Vanilla PHP.</div>
                            {/* <div className="fun text-2xl md:text-[0.625em] m-3"><Pink >link</Pink></div>
                            <div className="fun text-2xl md:text-[0.625em] m-3"><Pink >link</Pink></div> */}
                          </Container >
                        </a>

                        <a target = "_blank" href="https://github.com/banboy38/IEEE_Mega_Project" className="prnt2">
                          <Container className="chld" >
                            <div className="text-2xl md:text-[1em]">CollegeDB</div>
                            <div className="fun text-2xl md:text-[0.625em] m-3">A simple content management site for <Pink>BIT Mesra batch of 23'</Pink>. The authentication part is <Pink>significantly stronger</Pink> than the previous project, apart from other <Pink>improvements</Pink> in backend. Same stack though.</div>
                          </Container>
                        </a>
                        <a target = "_blank" href="https://github.com/banboy38/banboy38.github.io" className="prnt2">
                          <Container className="chld" >
                            <div className="text-2xl md:text-[1em]">Previous Portfolio</div>
                            <div className="fun text-2xl md:text-[0.625em] m-3">Here's my previous portfolio site from 3 years ago when I wasn't the <Pink>God of Pessimism</Pink> yet. So naturally, it's complete and utter shit.</div>
                          </Container>
                        </a>
                        <a href="/#" className="prnt2">
                          <Container className="chld" >
                            <div className="text-2xl md:text-[1em]">This Site</div>
                            <div className="fun text-2xl md:text-[0.625em] m-3">I started off with a React project, then later ended up making a <Pink>NextJs App along with TailwindCSS and Styled Components.</Pink><br/><Pink>Ggwp.</Pink></div>
                          </Container>
                        </a>

                    </div>                      
                </Parallax>
            </>
        )
    }
}