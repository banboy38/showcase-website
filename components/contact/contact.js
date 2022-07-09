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
                <div id="contact" style={{fontSize : "1.6em", paddingTop : "2.7em",}} className="break-words parallaxDiv bg-[url(/flowerspink.png)] md:bg-[url(/sakura.jpg)]">

                    <div className="font-extrabold text-center m-4 text-6xl cursor-pointer">
                        Contact
                    </div>

                    <div className="grid justify-items-center">
                        <hr width = "50%"/>
                    </div>

                    <ul className="textAnim mt-[1em] text-center ">

                        <li className="m-4"><div className="underline underline-offset-5">Mobile</div> <div>+91 9971380184</div> <div>+91 7544894946</div></li>
                        <li className="m-4"><div className="underline underline-offset-5">Email</div> <div>nabovtl@gmail.com</div> <div>dotanoob38@gmail.com</div></li>
                        <li className="m-4"><div className="underline underline-offset-5">LinkedIn</div> <div><Link href="https://www.linkedin.com/in/anirban-aditya-halder/" ><a target={"_blank"}>www.linkedin.com/in/anirban-aditya-halder/</a></Link></div></li>
                        <li className="m-4"><div className="underline underline-offset-5">Github</div> <div><Link href="https://github.com/banboy38"><a  target="_blank" >github.com/banboy38</a></Link></div></li>

                    </ul>
                    
                </div>
            </>
        )
    }
    


}