import { Red } from "../parallax/style"
import { Parallax, Pink, Shine } from "./style"
import { useState, useEffect } from "react"
import Image from "next/image"
import street from '../../public/street.jpg'

// import { div } from "../glassPanel/style"

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

            
                <Parallax id="portfolio" className={"bg-[url(/street.jpg)] select-none"}>
      

                    <div id="oo" className="mt-2">
                    {/* w-[100%] md:w-[50%] */}
                        <div className=" text-left backdrop-brightness-[0.6] backdrop-blur-[5px] backdrop-saturate-150 sm:mt-10 rounded-3xl p-6 " style={{boxShadow : "0 0 2em rgba(236, 72, 153, 0.0), inset 0 0 4em rgba(255,255,255, 0.00)", backgroundColor : 'rgba(255, 0, 102, 0.17)'}} >
                            <p className="text-5xl md:text-6xl font-extrabold">Welcome to the <Pink className="cursor-pointer">Portfolio</Pink> section 🎨</p> 
                            <p className="mt-4">As I said a while ago, here's an <Shine>isomorphic glass card</Shine> made completely using <Pink>Tailwind CSS.</Pink></p>
                            <p>Now this <Pink>may not render</Pink> in <Pink>Mozilla Firefox</Pink> because this is <Pink>some experimental shit.</Pink></p>
                            <p>But trust me bro, it <Pink>actually exists.</Pink></p>
                            <p className="mt-1"><Pink>Thank you.</Pink></p>
                        </div>
                        
                    </div>

                    {/* <div className="flex justify-center mt-[4em] mb-[5px]"><img alt = "Red Down Arrow" className="animate-pulse" style = {{height:"0.7em", width:"0.7em"}} src="./pinkArrow.png"/></div> */}
                    {/* <div className="mt-[6em] mb[5px] w-full bg-pink-900 h-1 rounded-full"></div> */}
                    
                    <div className="textAnim font-extrabold mt-[2.4em] mb-[2em] text-5xl md:text-6xl text-center ">
                        <span >My <Pink className="md:hover:tracking-widest cursor-pointer duration-300">Projects</Pink></span>
                    </div>

                    <div className="textAnim prnt mt-[0em] p-1 rounded-[0.5em] grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-2 ">

                        <a target = "_blank" href="http://tidbits.rf.gd" className="prnt2">
                          <div className="chld" >
                            <div className="text-2xl md:text-[1em]">Tidbits</div>
                            <div className="fun text-2xl md:text-[0.625em] leading-normal m-3">This unholy mess of <Pink>PHP, HTML,CSS and SQL</Pink> was the first site I developed. Just an ordinary blogging website with an extraordinarily confusing backend in Vanilla PHP.</div>
                            {/* <div className="fun text-2xl md:text-[0.625em] m-3"><Pink >link</Pink></div>
                            <div className="fun text-2xl md:text-[0.625em] m-3"><Pink >link</Pink></div> */}
                          </div >
                        </a>

                        <a target = "_blank" href="https://github.com/banboy38/IEEE_Mega_Project" className="prnt2">
                          <div className="chld" >
                            <div className="text-2xl md:text-[1em]">CollegeDB</div>
                            <div className="fun text-2xl md:text-[0.625em] leading-normal m-3">A simple content management site for <Pink>BIT Mesra batch of 23'</Pink>. The authentication part is <Pink>significantly stronger</Pink> than the previous project, apart from other <Pink>improvements</Pink> in backend. Same stack though.</div>
                          </div>
                        </a>
                        <a target = "_blank" href="https://banboy38.github.io/" className="prnt2">
                          <div className="chld" >
                            <div className="text-2xl md:text-[1em]">Previous Portfolio</div>
                            <div className="fun text-2xl md:text-[0.625em] leading-normal m-3">Here's my previous portfolio site from 3 years ago when I wasn't the <Pink>God of Pessimism</Pink> yet. So naturally, it's complete and utter shit.</div>
                          </div>
                        </a>
                        <a target = "_blank" href="https://hackaduck.vercel.app/" className="prnt2">
                          <div className="chld" >
                            <div className="text-2xl md:text-[1em]">Hack-A-Duck 2.0</div>
                            <div className="fun text-2xl md:text-[0.625em] leading-normal m-3">Developed the website for <Pink>Hack-A-Duck</Pink>, the premier hackathon organized by <Pink>Psyberduck in collaboration with IET, BIT Mesra.</Pink> It was an attempt to make something unique, wacky and aesthetic. Glad it was a success 😎.</div>
                          </div>
                        </a>
                        <a target = "_blank" href="https://devsdungeon.vercel.app/" className="prnt2">
                          <div className="chld" >
                            <div className="text-2xl md:text-[1em]">Devs Dungeon</div>
                            <div className="fun text-2xl md:text-[0.625em] leading-normal m-3">Developed the community website for <Pink>DevsDungeon.</Pink> Was already provided a design template for this one and couldn't improvise much, so it's quite <Pink>drab.</Pink></div>
                          </div>
                        </a>
                        <a href="/#" className="prnt2">
                          <div className="chld" >
                            <div className="text-2xl md:text-[1em]">This Site</div>
                            <div className="fun text-2xl md:text-[0.625em] leading-normal m-3">I started off with a React project, then later ended up making a <Pink>NextJs App along with TailwindCSS and Styled Components.</Pink><br/><Pink>Ggwp.</Pink></div>
                          </div>
                        </a>

                    </div>                      
                </Parallax>
            </>
        )
    }
}