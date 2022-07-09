import Parallax from "../components/parallax/parallax";
import Navbar from "../components/navbar/navbar";
import IntroCard from "../components/introCard/introCard";
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
      
  const description = "Hemlo there! I'm Anirban Aditya Halder, the God of Pessimism ❤️. And this is my dreadful excuse of a Portfolio made using Next.Js. Well, it's mostly React.Js but nevermind 🤙🏻"

    return(
            <>  <Head>
                  <title>
                    Anirban Aditya Halder - Portfolio
                  </title>
                  <link rel="canonical" href="https://www.anirbanhalder.social/" />
                  <meta name="viewport" content="width=device-width, initial-scale=1"/>
                  <meta name="description" content={description} />
                  <html lang="en" />
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

