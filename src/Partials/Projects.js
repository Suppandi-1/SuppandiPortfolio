import ProjectData from "./ProjectData";
const Projects = () => {
    return (  
        <div className=" nova-square text-p1 pt-32 pb-10 projects w-full h-full flex items-center justify-around flex-col overflow-hidden ">
                <h1 className=" font-bold  m-2 p-2 text-4xl roboto text-p2">MY <span className="text-p4">Projects</span></h1>
            <section className=" w-full h-full  flex flex-col" >
                <div className="projects  w-full h-full">
                    <ProjectData/>
                </div>

            </section>
        </div>
    );
}
 
export default Projects;