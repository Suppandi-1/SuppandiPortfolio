import { useEffect, useState } from "react";
import myImage from "../Assets/myImg4.4.png";
// import {box-icon} from "boxicons"
import {Link} from 'react-router-dom';
import 'boxicons';


import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['FrontEnd-Developer', 'BackEnd-Developer ', 'Android-Developer', 'Blogger' , 'Aero-Crafter'];

const Home = () => {


    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          2000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    
    let screenConditionSmall = (window.innerWidth< 640 )

    return ( 
        <div className="   flex  h-full w-full items-center justify-between   ">
            <div className=" w-full sm:w-4/5  h-full  flex justify-between items-center flex-col   ">
                {/* contentpart */} 
                    <div className=" nova-square  sm:mt-52  md:m-10 lg:m-16  h-full flex  flex-col justify-around ">
                        <div className="introdata">

                        {/* {screenConditionSmall &&   <b className=" inline-flex w-full sm:w-fit"><box-icon name='chevron-left'  type="solid" size='3rem' color="#81B29A"></box-icon></b> } */}
                        <header className="mx-5 webkit-t-s nova-square font-bold text-4xl  sm:text-5xl md:text-6xl  lg:text-7xl text-transparent ">
                            <h1 className ="flex items-center ">
                              {  <b className=" inline-flex w-fit sm:w-fit"><box-icon name='chevron-left'  type="solid" size='3rem' color="#81B29A"></box-icon></b> }
                                Hi, I am 
                            </h1>
                                <span className="font-bold  pl-12   text-transparent  text-5xl sm:text-6xl md:text-7xl lg:text-8xl    "> <span className="text-p2  webkit-none">D</span>EVESH</span>
                            <div  className=" relative text-animate w-lg pl-12 ">
                                <h2 className=" flex   text-3xl md:text-4xl lg:text-5xl  font-bold lg:font-bold   " >
                                    <TextTransition className="" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                    {  <b className="inline-flex  w-fit justify-end"><box-icon name='chevron-right' type="solid" size='3rem' color="#81B29A"></box-icon></b> }
                                </h2>
                            </div>
                        </header>
                        <p className="mx-2 py-0 md:my-10  text-2xl  lg:text-3xl ">
                            <h4 className=" my-5 font-bold text-p1 sm:text-p5  items-center flex flex-col sm:flex-row text-shadow">
                                <h1 className="sm:inline-flex flex sm:w-fit w-full justify-center">Code your dreams, Fly your ideas</h1>
                                </h4>
                            
                            <h4 className="  text-p1  lg:w-3/4  text-2xl flex  sm:block flex-wrap flex-col">
                                {/* { screenConditionSmall && <h1 className="w-full  border-solid border-0 border-p4 font-bold text-3xl border-b-4 text-center"> My Experties are </h1> } */}
                                { !screenConditionSmall && 'I specialize in building dynamic web experiences with ' } 
                                <b className="font-bold  text-p1 sm:text-p5 flex   sm:w-fit sm:inline-flex m-1 text-shadow "><box-icon color="#81B29A" type='logo' name='react'></box-icon>React_js</b> { !screenConditionSmall && 'and ' }
                                <b className="font-bold  text-p1 sm:text-p5 flex   sm:w-fit sm:inline-flex m-1 text-shadow "><box-icon color="#81B29A" name='nodejs' type='logo' ></box-icon>Node_js</b> { !screenConditionSmall && ',creating Android applications using ' }
                                <b className="font-bold  text-p1 sm:text-p5 flex   sm:w-fit sm:inline-flex m-1 text-shadow "><box-icon color="#81B29A" name='android' type='logo' ></box-icon>Kotlin_Jetpack_Compose</b> { !screenConditionSmall && 'and alongside crafting RC-plane by first designing a ' } 
                                <b className="font-bold  text-p1 sm:text-p5 flex   sm:w-fit sm:inline-flex m-1 text-shadow "><box-icon color="#81B29A" name='blender' type='logo' ></box-icon>CAD_model.</b>
                            </h4>
                            {/* <h4 className="my-3 text-cyan-500"></h4> */}
                        </p>
                        </div>
                        {/* the two buttons  */}
                        <div className="  m-5 w-fit lg:w-1/2 flex-row  relative flex justify-between  h-16 sm:h-20 ">
                            <Link to="/About"   className=" btn-box truncate relative inline-flex justify-center items-center rounded-2xl text-xl lg:text-3xl w-36 sm:w-52  h-auto m-2 lg:w-60 bg-transparent bg-opacity-0 md:bg-opacity-100 font-extrabold z-10  text-p5 border-solid border-2 sm:border-4 border-p5"> About Me      </Link>  
                            <Link to="/Contact" className=" btn-box truncate relative inline-flex justify-center items-center rounded-2xl text-xl lg:text-3xl w-36 sm:w-52  h-auto m-2 lg:w-60 bg-transparent bg-opacity-0 md:bg-opacity-100 font-extrabold z-10  text-p5 border-solid border-2 sm:border-4 border-p5"> Contact Me  </Link>
                        </div>
                    </div>
                    {/* contact-links */}
                    <div className="flex md:px-16 w-full justify-center md:justify-end absolute bottom-3 md:bottom-10 left-0">
                        <div className="  w-auto h-full flex justify-center ">
                            <a href="https://discord.gg/PG4qCMc8B9"                        rel="noreferrer" target="_blank"  className=" rounded-full  inline-flex items-center justify-center  m-1 md:m-3 h-14 w-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24   transition duration-700 ease-in-out hover:bg-p3 drop hover:shadow-none "><box-icon className="" type='logo' name='discord-alt' color="#F2CC8F"></box-icon></a>
                            <a href="ttps://www.linkedin.com/in/devesh-suthar-ab33a9207/"  rel="noreferrer" target="_blank"  className=" rounded-full  inline-flex items-center justify-center  m-1 md:m-3 h-14 w-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24   transition duration-700 ease-in-out hover:bg-p3 drop hover:shadow-none "><box-icon className="" type="logo" name='linkedin'    color='#F2CC8F' type='logo' ></box-icon></a>
                            <a href="https://www.instagram.com/devesh__s/"                 rel="noreferrer" target="_blank"  className=" rounded-full  inline-flex items-center justify-center  m-1 md:m-3 h-14 w-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24   transition duration-700 ease-in-out hover:bg-p3 drop hover:shadow-none "><box-icon className="" type='logo' name='instagram'   color='#F2CC8F'  className="text-3xl text-white boxIcon" ></box-icon></a>
                        </div>
                    </div>


            </div>

            <div className=" absolute  right-0 h-full flex justify-end items-end w-full  sm:w-[500px] lg:w-[600px] -z-10">
                 {/* imagepart */}
                 <div className="w-full    opacity-60 lg:opacity-100">
                  <div className="relative  flex items-center justify-center">
                    <div className="absolute  w-[25rem] h-[25rem] sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[35rem] lg:h-[35rem] opacity-75 border-solid border-8 border-p2 rounded-full -z-10 top-[4%] sm:top-[09%] "></div>
                    <img src={myImage} alt="" className="w-full lg:m-10 mb-2 md:mb-0 "/>
                  </div>
                </div>
            </div>
            
            
        </div>
     ); 
}
 
export default Home;
