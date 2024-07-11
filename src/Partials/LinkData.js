import React from 'react';
import Data from './Data.json';
const LinkData = () => {
    const links = Object.keys(Data.Links);
    return ( 

        <div className=" text-p1 nova-square overflow-scroll " >
            {links.map((category,index) => (
                <div key={index} className="m-5 ">
                    {/* <h2 className="text-3xl text-p5 m-2">{category}</h2> */}
                    <div className="" style={{ height: '200px' , overflow:'scroll' }}>
                        {Data.Links[category].map((post,idx)=>(
                            <a  key={idx}
                                href={post.L}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" ">
                                <div className="blog-post m-2 text-p1">
                                    <h3 className = "text-2xl text-p4 ">* {post.N}</h3>
                                    {/* <p  className = "text-xl px-4 " >{post.D}</p> */}
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
 
export default LinkData;