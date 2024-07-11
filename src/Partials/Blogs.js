import BlogsData from "./BlogsData";
import LinkData from "./LinkData";

const Blogs = () => {
    return ( 
        <div className="  roboto text-shadow justify-around items-center   pt-32  flex  w-full h-full ">
            <section className="  h-full w-auto flex flex-col justify-around">
                <h2 className=" text-4xl md:text-5xl text-p2 font-bold text-center ">My <span className="text-p5"> Blogs </span></h2>
                
                    <BlogsData />
             
            </section>
            {/* <section className="h-full w-auto">
                <h2 className=" text-4xl md:text-5xl text-p2 font-bold ">My <span className="text-p5"> Links </span></h2>
                <LinkData/>
            </section> */}
        </div>
     );
}
 
export default Blogs;