import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import {Blue, Red, Green, Yin, Yang, Fire} from './style';
import Script from 'next/script';

export default function Bio() {

    const [didMount, setdidMount] = useState(false);

    useEffect(() => {
      setdidMount(true);
    }, [])


    function Line(props){
      return(
        <>
          <div className="roll items-center content-center flex flex-col"><div className=" bg-[rgb(255,0,0)] w-[0.2em]" style={{height : props.val + "em"}}></div></div>
        </>
      )
    }
    
    
    if(didMount) {
        return(
            <>
              <Script id="japan">{`
                function jackal() {
                  var reveals = document.querySelectorAll(".leftAnim");
                
                  for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 0;
                    // console.log(elementTop, windowHeight, elementVisible);
                    if (elementTop < (55/100)*windowHeight) {
                      reveals[i].classList.add("active");
                    } else {
                      reveals[i].classList.remove("active");
                    }
                  }
                }

                function fox() {
                  var reveals = document.querySelectorAll(".rightAnim");
                
                  for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 0;
                    // console.log(elementTop, windowHeight, elementVisible);
                    if (elementTop < (55/100)*windowHeight) {
                      reveals[i].classList.add("active");
                    } else {
                      reveals[i].classList.remove("active");
                    }
                  }
                }

                function panda() {
                  var reveals = document.querySelectorAll(".roll");
                
                  for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 0;
                    // console.log(elementTop, windowHeight, elementVisible);
                    if (elementTop < (55/100)*windowHeight) {
                      reveals[i].classList.add("active");
                    } else {
                      reveals[i].classList.remove("active");
                    }
                  }
                }

                function siyaal() {
                  var reveals = document.querySelectorAll(".siyaal");
                
                  for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 0;
                    // console.log(elementTop, windowHeight, elementVisible);
                    if (elementTop < (55/100)*windowHeight) {
                      reveals[i].classList.add("active");
                    } else {
                      reveals[i].classList.remove("active");
                    }
                  }
                }
                
                if(typeof window !== 'undefined'){
                  window.addEventListener("scroll", jackal);
                  window.addEventListener("scroll", fox);
                  window.addEventListener("scroll", siyaal)
                  window.addEventListener("scroll", panda);
                }
              `}</Script>

              <div id = "background" className=" break-words parallaxDiv bg-[url(/butterfly.png)]">
                
                <div className="textAnim text-2xl md:text-4xl text-center mt-[26vh] mb-[2em]">お前はもう<Yang>死</Yang>んでいる
                  <div className="mt-3 text-5xl md:text-6xl">Background</div>
                </div>

                <Line val="10"/>
                <div className="flex justify-center">
                  <div className="leftAnim bg-[rgba(0,0,0,0.5)] md:p-3 rounded-xl w-[100%] md:w-[80%] text-center mt-[1em] mb-[1em]"><Blue>誕生</Blue><br/><div className="text-[1.3em] mt-1">The Beginning</div>
                    <div className="mt-3">
                    Born and brought up in New Delhi, I started fiddling with <Blue>HTML</Blue> at school when I was in <Blue>7th grade.</Blue> I could make very basic static pages and the best I could do at that point was to <Blue>fade the background image of a div.</Blue> 🥲
                    </div>
                  </div>
                </div>
                
                <Line val="10"/>
                <div className="flex justify-center">
                  <div className="rightAnim bg-[rgba(0,0,0,0.5)] md:p-3 rounded-xl w-[100%] md:w-[80%] text-center mt-[1em] mb-[1em]"><Green>生活</Green><br/><div className="text-[1.3em] mt-1">The Dream</div>
                    <div className="mt-3 ">
                      I seriously started pursuing full-stack developement in my sophomore year of university, Birla Institute of Technology, Mesra. I started off with <Green>PHP</Green> and followed it up with <Green>Laravel</Green> because it was comfortable and easy to grasp for me. Then someone introduced me to the <Green>unfathomably asynchronous</Green> world of <Green>JavaScript</Green> and since then there&apos;s been no looking back. 
                    </div>                  
                  </div>
                </div>

                <Line val="10"/>
                <div className="flex justify-center">
                  <div className="leftAnim bg-[rgba(0,0,0,0.5)] md:p-3 rounded-xl w-[100%] md:w-[80%]  text-center mt-[1em] mb-[1em]"><Red><Yin>陰</Yin>陽</Red><br/><div className="text-[1.3em] mt-1">Perseverance</div>
                  <div className="mt-3 ">
                      After close to two years of practice and a couple of projects later, at my current level of knowledge, I&apos;m able to make full-stack web apps with <Red>React or it&apos;s meta-frameworks as frontend, ExpressJs and NodeJs as backend, MongoDB or MySQL/PostgreSQL/SQLite as database and REST/GraphQL as API architecture.</Red> I&apos;m familiar with various React and ExpressJs libraries like <Red>Helmet, Passport, Redux, React-Hook-Form, MUI and Stripe among many others.</Red><br/> With this site, I decided to go out of my comfort zone and I built it using <Red>NextJs,</Red> an SSR-focused meta-framework based on React; other variants include <Red>Gatsby or Remix.</Red>
                  </div> 
                  </div>
                </div>

                <Line val="10"/>
                <div className="flex justify-center">
                  <div className="siyaal bg-[rgba(0,0,0,0.5)] md:p-3 rounded-xl w-[100%] md:w-[80%] text-center mt-[1em] mb-[1em]"><Red>無限の彼方へ</Red><br/><div className="text-[1.3em] mt-1">The Present And The Future</div>
                  
                  <div className="mt-3 ">
                      I&apos;m actively looking for good <Red>freelancing</Red> opportunities to build and develop <Red>beautiful, functional, optimized, SEO-friendly and scalable web apps</Red> for my clients.<br/> Be it <Red>SQL or NoSQL, REST or GraphQL, dynamic or static, personal websites or mid-tier enterprise level applications; I can handle them all pretty effectively and cleanly.</Red><br/>I primarily use <Red>MERN</Red> Stack. I&apos;m highly adaptable at my work, any add-ons or changes in the primary stack are done as and when <Red>required or requested.</Red>
                  </div>
                </div>
                </div>
                
              </div>
            </>
        )
    }

}