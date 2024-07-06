import image from "../Assets/myImg.png";
import {Link} from 'react-router-dom';


const About = () => {
    
    return ( 
        
        <div className=" flex  h-full w-full  flex-row " >
            {/* left part  */}
            <section className=" pt-24  flex flex-col items-center justify-center  w-3/5  ">
                <h2 className=" font-sans font-bold text-center text-6xl">About <span className="font-sans text-cyan-400">Me</span></h2>
                <div className=" relative w-80 h-96 rounded-full flex justify-center items-center">
                    <img  className=" w-72 h-72 rounded-full border_neone " src={image} alt="image" />
                    <span className="absolute circle-spin top-1/2 left-1/2 h-4/5 w-full rounded-full"></span>    
                 </div>

                <div className=" my-9 py-0 px-10">
                    <h3 className="text-2xl p-3">Hi there! I'm Devesh, a developer and tech enthusiast pursuing bachelors of Tech In Electrical from Guwahati, India. With a focus on innovation and excellence, I thrive on crafting dynamic web experiences and cutting-edge applications.</h3>
                    <h3 className="text-2xl p-3"> My journey in technology started with a fascination for problem-solving and a desire to create impactful solutions. Over the years, I've honed my skills in web development using React.js and Node.js, as well as mobile app development with Kotlin and Jetpack Compose. My academic pursuits at IIT Guwahati have further solidified my foundation in these areas.
                    </h3>
                
                    <div className=" ">
                        <Link to="/Projects" className=" btn-box relative inline-flex justify-center items-center rounded-2xl text-3xl w-60 h-20 bg-cyan-600 font-extrabold z-10 m-3">My Projects</Link>
                        <Link to="/Blogs" className=" btn-box relative inline-flex justify-center items-center rounded-2xl text-3xl w-60 h-20 bg-cyan-600 font-extrabold z-10 m-3">My Blogs</Link>
                    </div>
                </div>
            {/* right part  */}

    
            </section>

            <section className="  pt-24 ">
                <div className=" pt-8 h-full">

                    <h1 className="text-3xl  text-cyan-400 font-extrabold text-center"> Skills </h1>
                    <div className="m-4 p-1 h-full flex flex-col justify-between h-full">
                        <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">Web Development:    </h1><p className ="m-2 p-2  color-palette2 ">Proficient in React.js and Node.js, creating responsive and efficient web applications.</p></div>
                        <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">App Development:    </h1><p className ="m-2 p-2  color-palette2 ">Skilled in Kotlin and Jetpack Compose, delivering high-quality Android applications.</p></div>
                        <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">Aeromodelling:      </h1><p className ="m-2 p-2  color-palette2 ">Experienced in designing and developing advanced aeromodelling projects.</p></div>
                        <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">Automation:         </h1><p className ="m-2 p-2  color-palette2 ">Developed Selenium bots using Node.js to automate tasks on platforms like Pinterest and Instagram.</p></div>
                        <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">CAD Modeling:       </h1><p className ="m-2 p-2  color-palette2 ">Proficient in Fusion 360 for creating detailed and precise CAD models, particularly in aeromodelling.</p></div>
                        <div className="m-2 p-2 text-xl "><h1 className ="m-2 p-0  color-palette3 font-bold text-2xl">                    </h1><p className ="m-2 p-2  color-palette2 "></p></div>
                    </div>

                </div>
                
            </section>
        </div>
     );
}
 
export default About;
