import React from 'react';
import Data from './Data.json';

const BlogsData = () => {
    const blogs = Object.keys(Data.Blogs);
    let screenConditionSmall = (window.innerWidth<640);
    return ( 

        <div className=" text-p1 nova-square  h-5/6  flex   md:flex-row  flex-wrap overflow-auto " >
            {blogs.map((category,index) => (
                <div key={index} className=" md:h-auto p-10  flex flex-col ">
                    <h2 className="text-2xl md:text-3xl text-p2  ">{category}</h2>
                    <div className=" " style={{   overflow:'scroll' }}>
                        {Data.Blogs[category].map((post,idx)=>(
                            <a  key={idx}
                                href={post.L}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" ">
                                <div className="blog-post m-2 text-p1">
                                    <h3 className = "flex items-center text-xl md:text-2xl text-p4 ">
                                         { post.H}
                                         </h3>
                                    <p  className = "text-lg md:text-xl px-4 flex items-center" >
                                        <box-icon type='logo' color="#F4F1DE" size="1.2rem" name='blogger'></box-icon>&nbsp;
                                        {post.D}
                                        </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            {/* <h1>{topKey}</h1> */}
        </div>
     );
}
 
export default BlogsData;