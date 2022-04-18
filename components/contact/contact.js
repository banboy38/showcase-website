import { Contactless } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import reactDom from "react-dom";

import {} from './style';

export default function Contact() {

    const [didMount, setdidMount] = useState(false);

    useEffect(() => {
      setdidMount(true)
    }, [])

    if(didMount){
        return (
            <>
                <div id="contact" style={{fontSize : "1.6em", paddingBottom : "15vh"}} className="break-words parallaxDiv bg-[url(/flowerspink.png)] md:bg-[url(/sakura.png)]">

                    <div className="text-center m-6 text-6xl">
                        Contact
                    </div>
                    <div className="grid justify-items-center">
                    <hr width = "50%"/>
                    </div>
                    {/* <div className="mt-5 grid justify-items-center">
                        <div className=" w-[40%] flex text-center "> <div className="grow basis-1/3">Mobile</div><div className="grow basis-1/3">:</div><div className="grow basis-1/3">9971380184</div> </div>
                    </div> */}

                    <ul className="textAnim mt-[2em] text-center ">

                        <li className="m-4"><div className="underline underline-offset-5 mb-[-35px]">Mobile</div> <br/> +91 9971380184 <br/> +91 7544894946 </li>
                        <li className="m-4"><div className="underline underline-offset-5 mb-[-35px]">Email</div> <br/> nabovtl@gmail.com <br/> dotanoob38@gmail.com</li>
                        <li className="m-4"><div className="underline underline-offset-5 mb-[-35px]">LinkedIn</div> <br/> <Link href="https://www.linkedin.com/in/anirban-aditya-halder/"><a  target="_blank" >www.linkedin.com/in/anirban-aditya-halder/</a></Link></li>
                        <li className="m-4"><div className="underline underline-offset-5 mb-[-35px]">Github</div> <br/> <Link href="https://github.com/banboy38"><a  target="_blank" >github.com/banboy38</a></Link></li>

                    </ul>
                    
                </div>
            </>
        )
    }
    


}