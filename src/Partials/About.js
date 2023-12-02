import image from "../resources/myImage111.png";


const About = () => {
    
    return ( 
        <section className="absolute flex flex-col items-center justify-center h-full min-w-full gap-8 About">
            <h2 className="mb-12 font-sans font-bold text-center text-7xl">About <span className="font-sans text-cyan-400">Me</span></h2>
            <div className="relative w-80 h-96 rounded-[50%] flex justify-center items-center">
                <img  className=" w-11/12  rounded-[50%] ]" src={image} alt="image" />
                <span className="absolute circle-spin top-1/2 left-1/2 h-4/5 w-full rounded-[50%]"></span>    
            </div>

            <div className="text-center about-content">
                <h3 className="text-4xl ">FrontEnd Developer!</h3>
                <p className="text-2xl ">
                    <p><b>FrontEnd Developer:    </b> Expertise in React.</p>
                    <p><b>Backend Developer:     </b> Experience in Node.js.</p>
                    <p><b>Android Development:   </b> Kotline Based Developer.</p>
                    <p><b>B.Tech student:        </b> Pursuing a degree in Electronics Engineering.</p>
                    <p><b>Blogger:               </b> Enjoys writing about the things I learn.</p>
                </p>
                <div className="inline-block btn-box btns w-60">
                    <a href="/Projects" className="btn">My Projects</a>
                </div>
            </div>
           
  
    
        </section>
     );
}
 
export default About;
