import {boxicons} from 'boxicons'
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    let screenConditionSmall = (window.innerWidth < 640)
    const [showNavbar, setShowNavbar] = useState( screenConditionSmall);
    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const clickMoblileNav = () =>{
        setShowNavbar(window.innerWidth<1024)
    }

return ( 
    <nav className= " absolute text-shadow
    z-50 h-auto fixed top-0 left-0  flex flex-col  justify-between w-full  py-1 md:py-6 text-xl lg:flex-row ">
       <div className=" w-full lg:w-2/5  m-auto">
       <h3 className=" font-bold   flex flex-col items-center ">
            <h1 href="/" className='text-5xl md:text-6xl pl-4 tilt-prism text-p2'>
                Portfoli
                <div className="inline-block" onClick={toggleNavbar}>
                {!showNavbar && <div className="inline-block w-12 h-12  border-4 border-solid border-p2 rounded-full flex justify-center items-center  " > <box-icon  name='joystick-button' color="#F2CC8F" size="2rem" ></box-icon> </div> }
                {showNavbar &&  <div className="inline-block w-12 h-12  border-4 border-solid border-p2 rounded-full flex justify-center items-center  " > <box-icon  name='joystick-button' type='solid' color="#F2CC8F" size="2rem" ></box-icon></div>
                }
                </div>
            </h1>
            <h2 className="tilt-prism italic text-3xl md:text-4xl tracking-wider text-p5">Devesh suthar</h2>
            </h3>
        </div>
       <div className=' w-full flex  items-center justify-center m-auto  my-3 lg:w-3/5 text-shadow '>
                   {!showNavbar &&
            <div className=' navGradiant  w-full h-fit items-center justify-around flex'>
            <ul className=" w-full  flex justify-around flex-col md:flex-row items-center  font-bold  lg:m-1">
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-p1  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/" >Home</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-p1  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/About">About</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-p1  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/Projects">Projects</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-p1  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/Blogs">Blogs</Link></li>
                <li className=' m-5 md:m-0'><Link className="text-xl md:text-2xl text-p1  md:m-0 lg:p-2  lg:m-0 " onClick={clickMoblileNav} to="/Contact">Contact</Link></li>
                {/* <li><Link to="/Skills">Skills</Link></li> */}
            </ul>
            </div>}
        </div>
    </nav>
 );
}
 
export default Nav;

