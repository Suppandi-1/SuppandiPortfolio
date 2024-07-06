// import {boxicons} from 'boxicons'
import React, { useState } from 'react';

import {Link} from 'react-router-dom';

const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

return ( 
    <nav className="  fixed top-0 left-0 z-10 flex justify-between w-full  py-6 text-xl Nav">
       <div className=" w-2/5 m-1">
       <h3 className=" font-bold text-5xl  flex flex-col items-center ">
            <h1 href="/" className=' pl-5 tilt-prism'>
                Portfoli
                <div className="inline-block" onClick={toggleNavbar}>
                {!showNavbar && <div className="inline-block w-10 h-10 border_neone rounded-full" ></div> }
                {showNavbar &&
                     <div className="inline-block w-10 h-10 border_neone2 rounded-full " ></div>
                }
                </div>
            </h1>
            <h2 className="tilt-prism italic text-4xl tracking-wider">Devesh suthar</h2>
            </h3>
        </div>
       <div className=' w-3/6 m-1 flex items-center justify-center'>
                   {!showNavbar &&
            <div className=' w-full items-center justify-center flex'>
            <ul className="w-5/6 flex justify-around  font-bold ">
                <li><Link className=" text-2xl text-cyan-100" to="/" >Home</Link></li>
                <li><Link className=" text-2xl text-cyan-100" to="/About">About</Link></li>
                <li><Link className=" text-2xl text-cyan-100" to="/Projects">Projects</Link></li>
                <li><Link className=" text-2xl text-cyan-100" to="/Blogs">Blogs</Link></li>
                <li><Link className=" text-2xl text-cyan-100" to="/Contact">Contact</Link></li>
                {/* <li><Link to="/Skills">Skills</Link></li> */}
            </ul>
            </div>}
        </div>
    </nav>
 );
}
 
export default Nav;


{/* <h3 className=" font-bold text-5xl findr ">
<h1 href="/" className=' pl-5 tilt-prism'>
    Portfoli
    <div className="inline-block" onClick={toggleNavbar}>
    {!showNavbar && <div className="inline-block w-10 h-10 border_neone rounded-full" ></div> }
    {showNavbar &&
         <div className="inline-block w-10 h-10 border_neone2 rounded-full " ></div>
    }
    </div>
</h1>
<h2 className="tilt-prism italic text-4xl tracking-wider">Devesh suthar</h2>
</h3>


} */}