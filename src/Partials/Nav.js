import {boxicons} from 'boxicons'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(window.innerWidth < 1024);
    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const clickMoblileNav = () =>{
        setShowNavbar(window.innerWidth<1024)
    }

return ( 
    <nav className= " absolute 
    z-50 h-auto fixed top-0 left-0  flex flex-col  justify-between w-full  py-1 md:py-6 text-xl lg:flex-row ">
       <div className=" w-full lg:w-2/5  m-auto">
       <h3 className=" font-bold   flex flex-col items-center ">
            <h1 href="/" className='text-4xl md:text-5xl pl-5 tilt-prism'>
                Portfoli
                <div className="inline-block" onClick={toggleNavbar}>
                {!showNavbar && <div className="inline-block w-12 h-12 border_neone rounded-full flex justify-center items-center " > <box-icon  name='joystick-button' color="#39ff14" size="2rem"></box-icon> </div> }
                {showNavbar &&
                     <div className="inline-block w-12 h-12 border_neone rounded-full flex justify-center items-center" ><box-icon name='joystick-button' type='solid' color="white" size="2rem" ></box-icon></div>
                }
                </div>
            </h1>
            <h2 className="tilt-prism italic text-3xl md:text-4xl tracking-wider">Devesh suthar</h2>
            </h3>
        </div>
       <div className=' w-full flex  items-center justify-center m-auto  my-3 lg:w-3/5 '>
                   {!showNavbar &&
            <div className=' navGradiant  w-full h-fit items-center justify-around flex'>
            <ul className=" w-full  flex justify-around flex-col md:flex-row items-center  font-bold  lg:m-1">
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-cyan-100  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/" >Home</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-cyan-100  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/About">About</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-cyan-100  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/Projects">Projects</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-cyan-100  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/Blogs">Blogs</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-cyan-100  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/Contact">Contact</Link></li>
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