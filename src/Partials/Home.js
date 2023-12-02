import { useEffect, useState } from "react";
import myImage from "../resources/myImage11.png";
// import {box-icon} from "boxicons"
import {Link} from 'react-router-dom';
import 'boxicons';

import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['FrontEnd Developer', 'BackEnd Developer ', 'Android Developer', 'Blogger'];

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
        <div className="flex home min-h-[100vh] items-center py-o px-[9%]">
            <div className="max-w-5xl home-content ">
                <h1 className="font-bold text-8xl ">
                    Hi, I am <span className="font-bold text-cyan-900">Suppandi</span>
                </h1>
                <div className="relative text-animate w-lg">
                    <h2 className="my-5 text-5xl font-bold text-transparent" >
                        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    </h2>
                </div>
                <p className="text-2xl ">
                    <h4 className="my-5 font-bold text-cyan-200">FrontEnd finesse, BackEnd brilliance, and a dash of  Android Expertise</h4>
                    <h4 className="my-2 text-cyan-300">Web development, Android programming, Electrical Engineering , An avid gamer and anime aficionado</h4>
                    <h4 className="my-3 text-cyan-500">Let's collaborate and create</h4>
                    </p>
                <div className="btn-box relative flex justify-between w-[34.5rem] h-20">
                    <Link to="/About"> About Me      </Link>  
                    <Link to="/Contact"> Contact Me  </Link>
                </div>
            </div>
            {/* <div className="image">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet alias, odio necessitatibus ipsam, accusantium quae cum sit tenetur fugiat voluptatibus dignissimos quo obcaecati earum corrupti nisi nostrum eveniet. Eius ad quod veniam vel molestiae ducimus perferendis laborum fugiat reprehenderit ab.</p>
                <img src="../../resources/1.jpeg" alt="" />
            </div> */}
            <div className="home-sci absolute bottom-16 w-[300px] flex justify-around">
                <a 
                    href="https://discord.gg/PG4qCMc8B9" 
                    className="relative inline-flex items-center justify-center w-24 h-24  bg-transparent rounded-[50%]"
                    >
                        <box-icon className="" type='logo' name='discord-alt' color="#2C7DA0"></box-icon>
                </a>
                <a 
                    href="ttps://www.linkedin.com/in/devesh-suthar-ab33a9207/" 
                    className="relative inline-flex items-center justify-center w-24 h-24  bg-transparent rounded-[50%]"
                    >
                         <box-icon className="text-3xl " name='linkedin' color='#2C7DA0' type='logo' ></box-icon>
                </a>
                <a 
                    href="https://www.instagram.com/devesh__s/" 
                    className="relative inline-flex items-center justify-center w-24 h-24  bg-transparent rounded-[50%]"
                    >
                        <box-icon name='instagram' type='logo' color='#2C7DA0'  className="text-3xl text-white boxIcon" ></box-icon>
                </a>
               
            </div>
            <div className="image">
                    <img src={myImage} alt=""/>
                  
                
            </div>
        </div>
     ); 
}
 
export default Home;
