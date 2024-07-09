import { useEffect, useState } from "react";
import myImage from "../Assets/myImg4.4.png";
// import {box-icon} from "boxicons"
import {Link} from 'react-router-dom';
import 'boxicons';

import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['FrontEnd Developer', 'BackEnd Developer ', 'Android Developer', 'Blogger' , 'Aero-Crafter'];

const Home = () => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          2000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return ( 
        <div className="  flex  h-full w-full items-center justify-between  ">
            <div className=" w-full sm:w-4/5 h-full  flex justify-center items-center flex-col ">
                {/* contentpart */} 
                    <div className="   mt-16 sm:mt-40 mx-4 md:m-10 lg:m-16 ">
                        <h1 className="  font-bold text-5xl sm:text-6xl md:text-7xl  lg:text-8xl ">
                            Hi, I am <span className="font-bold  text-transparent webkit-t-s">Devesh</span>
                        </h1>
                        <div className="relative text-animate w-lg">
                            <h2 className="my-5 text-3xl md:text-4xl lg:text-5xl  font-normal lg:font-bold text-transparent" >
                                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                            </h2>
                        </div>
                        <p className="mx-2 md:my-10  text-xl md:text-2xl  lg:text-3xl ">
                            <h4 className=" my-5 font-bold text-cyan-200">Code your dreams. Fly your ideas.</h4>
                            <h4 className="text-cyan-300  ">I specialize in building dynamic web experiences with &nbsp;
                                <b className="font-bold find color-neone">React_js</b> and&nbsp;
                                <b className="font-bold find color-neone">Node_js</b>,  creating Android applications using&nbsp;
                                <b className="font-bold find color-neone">Kotlin_Jetpack_Compose</b> and alongside crafting RC-plane by first desining a 
                                <b className="font-bold find color-neone"> CAD_model.</b>
                            </h4>
                            {/* <h4 className="my-3 text-cyan-500"></h4> */}
                        </p>
                        {/* the two buttons  */}
                        <div className="  w-fit w-full lg:w-1/2 flex-col lg:flex-row  relative flex justify-between   h-32 lg:h-20 ">
                            <Link to="/About"   className="text-white btn-box relative inline-flex justify-center items-center rounded-2xl text-2xl lg:text-3xl w-52 h-20 lg:h-auto m-2 lg:w-60 bg-cyan-600 bg-opacity-0 md:bg-opacity-100 font-extrabold z-10 "> About Me      </Link>  
                            <Link to="/Contact" className="text-white btn-box relative inline-flex justify-center items-center rounded-2xl text-2xl lg:text-3xl w-52 h-20 lg:h-auto m-2 lg:w-60 bg-cyan-600 bg-opacity-0 md:bg-opacity-100 font-extrabold z-10 "> Contact Me  </Link>
                        </div>
                    </div>
                    {/* contact-links */}
                    <div className="  flex  md:p-9 w-full  justify-center md:justify-normal ">
                        <div className="  w-auto h-full flex justify-center ">
                            <a href="https://discord.gg/PG4qCMc8B9"                         target="_blank"  className="border-[#39ff14] border-solid  m-1  md:m-3 inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-transparent rounded-full border-6 b hover:bg-white transition duration-700 ease-in-out hover:border-[#2C7DA0]"><box-icon className="" type='logo' name='discord-alt' color="#2C7DA0"></box-icon></a>
                            <a href="ttps://www.linkedin.com/in/devesh-suthar-ab33a9207/"   target="_blank"  className="border-[#39ff14] border-solid  m-1  md:m-3 inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-transparent rounded-full border-6 b hover:bg-white transition duration-700 ease-in-out hover:border-[#2C7DA0]"><box-icon className="" type="logo" name='linkedin'    color='#2C7DA0' type='logo' ></box-icon></a>
                            <a href="https://www.instagram.com/devesh__s/"                  target="_blank"  className="border-[#39ff14] border-solid  m-1  md:m-3 inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-transparent rounded-full border-6 b hover:bg-white transition duration-700 ease-in-out hover:border-[#2C7DA0]"><box-icon className="" type='logo' name='instagram'   color='#2C7DA0'  className="text-3xl text-white boxIcon" ></box-icon></a>
                        </div>
                    </div>


            </div>

            <div className=" absolute  right-0 h-full flex justify-end items-end w-[300] sm:w-[500] lg:w-[600px] -z-10">
                 {/* imagepart */}
                <div className="  w-full ">
                    <div className="  ">
                        <img src={myImage} alt="" className=" h-full w-full opacity-60 md:opacity-80 imagehover "/>
                    </div>
                </div>
            </div>
            
            
        </div>
     ); 
}
 
export default Home;
