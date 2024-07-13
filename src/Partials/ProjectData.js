import React from "react";
import Data from './Data.json';

const ProjectData = () => {
    const projects = Data.Projects;
    const neone = '#39ff14';
    const p2    = '#E07A5F';
    const p1    = '#F4F1DE';
    const p3    = '#3D405B';
    const p4    = '#81B29A';
    const p5    = '#F2CC8F';
    return (
        <div className=" project   w-full h-full  flex  lg:items-center  justify-center overflow-hidden   ">


            

            <span className=" relative h-full w-fit lg:h-fit lg:w-full 
                project-gradiant
                
                
               
            ">
                <span className="absolute  w-full h-full -z-10"></span>
            <div className=" 
                w-[300px] lg:w-full h-full lg:h-fit 
                lg:overflow-x-auto lg:overflow-y-hidden 
                overflow-y-auto
                overflow-x-hidden
                whitespace-nowrap
                flex 
                
                lg:flex-row
                flex-col
                p-5
                ">

            {projects.map((project,index)=>{
                
                const image = require(`${project.I}`); 
                return (
                    <div key={index} className="flex flex-col  border-solid  rounded-xl border-4 border-p4   w-full lg:w-[300px] xl:w-[400px] flex-none my-5 lg:m-5">
                    <h1 className=" tracking-tighter  text-xl xl:text-2xl text-center font-bold text-p2 p-1">{project.H}</h1>
                    <div className="px-4 py-1">
                        <img src={image} alt="image" className="p-0 rounded-lg  shadow-black shadow-2xl w-full" />
                    </div>

                    <div className="px-4 py-2 max-w-lg  h-full">
                    <p className="  whitespace-break-spaces">{project.P}</p>

                    </div>
                    <p className="p-1 px-4 py-1 "> {project.D}</p>
                    
                    <a href={project.R} target="_blank" className="bg-p4 p-2 text-p3 font-bold text-xl  flex  w-full" >
                        <span className=" w-full text-center flex items-center justify-center"><box-icon type='logo' color={p3} name='github'></box-icon>&nbsp;Github Repository</span>
                    </a>
                    
                </div>

                );
            })}
            </div>


            </span>
            
           
        </div> 


    );
}
 
export default ProjectData;