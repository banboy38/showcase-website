import Parallax from "../components/parallax/parallax";
import Navbar from "../components/navbar/navbar";
import IntroCard from "../components/introCard/introCard";
import Portfolio from "../components/portfolio/portfolio";
import Bio from "../components/bio/bio"
import Contact from "../components/contact/contact";
import Head from "next/head";
import tron from '../public/tron.png'

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

export default function Welcome(props){

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

                  <meta property="og:title" content="Anirban Aditya Halder - Portfolio"/>
                  <meta property="og:type" content="Portfolio Website" />
                  <meta property="og:description" content={description}/>
                  <meta property="og:image" content="https://drive.google.com/file/d/1Kk4eFtBY3nLE_6pnR1TbeNU6_HC9qYg7/view?usp=sharing"/>
                  <meta property="og:url" content="http://www.anirbanhalder.social"/>
                  <meta name="twitter:card" content="https://drive.google.com/file/d/1Kk4eFtBY3nLE_6pnR1TbeNU6_HC9qYg7/view?usp=sharing"/>
                </Head>

                <Navbar logo = {props.logo}/>              
                <IntroCard/>
                <Parallax/>
                <Portfolio/>
                <Bio/>
                <Contact/>
            </>      
    )
}


export async function getStaticProps(context) {
  return {
    props: {
      logo : tron
    }, // will be passed to the page component as props
  }
}