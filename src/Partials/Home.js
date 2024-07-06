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
        <div className=" flex  h-full w-full items-center  ">
            <div className=" w-3/5 h-full  flex justify-center items-center flex-col ">
                {/* contentpart */} 
                    <div className=" home-content mt-40 m-16 ">
                        <h1 className="  font-bold text-8xl ">
                            Hi, I am <span className="font-bold  text-transparent webkit-t-s">Devesh</span>
                        </h1>
                        <div className="relative text-animate w-lg">
                            <h2 className="my-5 text-5xl font-bold text-transparent" >
                                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                            </h2>
                        </div>
                        <p className="   text-3xl ">
                            <h4 className=" my-5 font-bold text-cyan-200">Code your dreams. Fly your ideas.</h4>
                            <h4 className="text-cyan-300  ">I specialize in building dynamic web experiences with &nbsp;
                                <b className="font-bold find color-neone">React_js</b> and&nbsp;
                                <b className="font-bold find color-neone">Node_js</b>,  creating Android applications using&nbsp;
                                <b className="font-bold find color-neone">Kotlin_Jetpack_Compose</b> and alongside crafting RC-plane by first desining a 
                                <b className="font-bold find color-neone"> CAD_model.</b>
                            </h4>
                            <h4 className="my-3 text-cyan-500"></h4>
                        </p>
                        {/* the two buttons  */}
                        <div className=" w-3/5  relative flex justify-between w-[34.5rem] h-20">
                            <Link to="/About"   className="btn-box relative inline-flex justify-center items-center rounded-2xl text-3xl w-60 bg-cyan-600 font-extrabold z-10"> About Me      </Link>  
                            <Link to="/Contact" className="btn-box relative inline-flex justify-center items-center rounded-2xl text-3xl w-60 bg-cyan-600 font-extrabold z-10"> Contact Me  </Link>
                        </div>
                    </div>
                    {/* contact-links */}
                    <div className="flex  w-full justify-center items-center ">
                        <div className="flex  w-auto h-full mb-2">
                            <a href="https://discord.gg/PG4qCMc8B9"                         target="_blank"  className="border_neone p-2 m-2 inline-flex items-center justify-center w-24 h-24 bg-transparent rounded-full border-8 b hover:bg-white transition duration-1000 ease-in-out hover:border-red-600">
                                <box-icon className="" type='logo' name='discord-alt' color="#2C7DA0"></box-icon></a>
                            <a href="ttps://www.linkedin.com/in/devesh-suthar-ab33a9207/"   target="_blank"  className="border_neone p-2 m-2 inline-flex items-center justify-center w-24 h-24 bg-transparent rounded-full border-8 b hover:bg-white transition duration-1000 ease-in-out hover:border-red-600">
                                <box-icon className="" type="logo" name='linkedin'    color='#2C7DA0' type='logo' ></box-icon></a>
                            <a href="https://www.instagram.com/devesh__s/"                  target="_blank"  className="border_neone p-2 m-2 inline-flex items-center justify-center w-24 h-24 bg-transparent rounded-full border-8 b hover:bg-white transition duration-1000 ease-in-out hover:border-red-600">
                                <box-icon className="" type='logo' name='instagram'   color='#2C7DA0'  className="text-3xl text-white boxIcon" ></box-icon></a>
                        </div>
                    </div>


            </div>

            <div className="w-2/5 h-full flex justify-end items-end ">
                 {/* imagepart */}
                <div className="  w-4/6 ">
                    <div className="">
                        <img src={myImage} alt="" className=" h-full w-full opacity-80 imagehover"/>
                    </div>
                </div>
            </div>
            
            
        </div>
     ); 
}
 
export default Home;
