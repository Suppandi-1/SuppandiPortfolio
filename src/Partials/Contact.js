import 'boxicons';
import image from '../Assets/setup1.png'
import React, { useState } from 'react';

const Contact = () => {
    const [visibleField, setVisibleField] = useState('name');
    const handleLabelClick = (field) => {
      setVisibleField(field);
    };
    return ( 
        <div className="nova-square text-p1 w-full h-full flex  flex-col-reverse  sm:flex-row justify-around pt-14 sm:pt-24">
            {/* <div className=" -z-10  h-full w-auto absolute opacity-[.3] top-0 left-0">
              <img className="  h-full w-auto object-cover min-w-[600px] min-h-[400px]" src={image} ></img>
            </div> */}

             <section className=" m-0 sm:mx-10  flex flex-col justify-center sm:justify-around  ">
                <div className="flex flex-row  sm:flex-col justify-center sm:h-3/5  items-center ">

                <h1 className=" text-3xl -rotate-90 sm:rotate-0 sm:text-4xl md:text-5xl font-bold text-center  p-4 text-p2 roboto "> Find <b className="text-p4"> Me </b> </h1>  
                <ul className=" w-fit h-full  my-3 md:w-full px-0 border-l-8 border-0 border-p4 border-solid flex flex-col justify-between  ">

                  <li className="w-full "> <a href="https://www.linkedin.com/in/devesh-suthar-/"   className="  ml-0  px-4   w-full h-full flex  justify-start items-center hover:border-cyan-300 transition-colors duration-700 hover:shadow-white  rounded-e-xl hover:text-p3 hover:bg-p4 " target="_blank"><div className=" rounded-full flex justify-center items-center h-fit w-fit my-1 sm:my-2 md:my-3 p-1 "><box-icon type='logo' color="#E07A5F" size="2rem" name='linkedin'>  </box-icon></div> &nbsp; <h1 className="text-xl sm:text-2xl md:text-3xl  px-1 md:px-2   "> LinkedIn </h1> </a> </li>
                  <li className="w-full "> <a href="https://x.com/DeveshDaku"                      className="  ml-0  px-4   w-full h-full flex  justify-start items-center hover:border-cyan-300 transition-colors duration-700 hover:shadow-white  rounded-e-xl hover:text-p3 hover:bg-p4 " target="_blank"><div className=" rounded-full flex justify-center items-center h-fit w-fit my-1 sm:my-2 md:my-3 p-1 "><box-icon type='logo' color="#E07A5F" size="2rem" name='twitter'>   </box-icon></div> &nbsp; <h1 className="text-xl sm:text-2xl md:text-3xl  px-1 md:px-2   "> Twitter </h1> </a></li>
                  <li className="w-full "> <a href="https://www.instagram.com/devesh__s"           className="  ml-0  px-4   w-full h-full flex  justify-start items-center hover:border-cyan-300 transition-colors duration-700 hover:shadow-white  rounded-e-xl hover:text-p3 hover:bg-p4 " target="_blank"><div className=" rounded-full flex justify-center items-center h-fit w-fit my-1 sm:my-2 md:my-3 p-1 "><box-icon type='logo' color="#E07A5F" size="2rem" name='instagram'> </box-icon></div> &nbsp; <h1 className="text-xl sm:text-2xl md:text-3xl  px-1 md:px-2   "> Instagram </h1> </a></li>
                  <li className="w-full "> <a href="https://github.com/Devesh-daku"                className="  ml-0  px-4   w-full h-full flex  justify-start items-center hover:border-cyan-300 transition-colors duration-700 hover:shadow-white  rounded-e-xl hover:text-p3 hover:bg-p4 " target="_blank"><div className=" rounded-full flex justify-center items-center h-fit w-fit my-1 sm:my-2 md:my-3 p-1 "><box-icon type='logo' color="#E07A5F" size="2rem" name='github'>    </box-icon></div> &nbsp; <h1 className="text-xl sm:text-2xl md:text-3xl  px-1 md:px-2   "> Github </h1> </a></li>
                  <li className="w-full "> <a href="https://discord.gg/PG4qCMc8B9"                 className="  ml-0  px-4   w-full h-full flex  justify-start items-center hover:border-cyan-300 transition-colors duration-700 hover:shadow-white  rounded-e-xl hover:text-p3 hover:bg-p4 " target="_blank"><div className=" rounded-full flex justify-center items-center h-fit w-fit my-1 sm:my-2 md:my-3 p-1 "><box-icon type='logo' color="#E07A5F" size="2rem" name='discord'>   </box-icon></div> &nbsp; <h1 className="text-xl sm:text-2xl md:text-3xl  px-1 md:px-2   "> Discord </h1> </a></li>
                  <li className="w-full "> <a href="mailto:suthar.d@outlook.com"                   className="  ml-0  px-4   w-full h-full flex  justify-start items-center hover:border-cyan-300 transition-colors duration-700 hover:shadow-white  rounded-e-xl hover:text-p3 hover:bg-p4 " target="_blank"><div className=" rounded-full flex justify-center items-center h-fit w-fit my-1 sm:my-2 md:my-3 p-1 "><box-icon type='logo' color="#E07A5F" size="2rem" name='gmail'>     </box-icon></div> &nbsp; <h1 className="text-xl sm:text-2xl md:text-3xl  px-1 md:px-2   "> Email </h1> </a></li>



                </ul>
                </div>
                
              </section>  
            {/* sec1 */}
            <section className='m-0 sm:mx-5  md:mx-10  flex flex-col  justify-around '>
              <div className="  md:m-2 md:p-2  flex flex-col items-center justify-around">

              <div className="  h-full   flex justify-center  items-center flex-col mb-0 sm:mb-10">
              <h1 className=" text-3xl  sm:text-4xl md:text-5xl   font-bold text-center m-2 sm:m-12 p-1 px-4 sm:p-4 roboto text-p2"> Message <b className="text-p4"> Me </b> </h1>
              <form className="  bg-opacity-70 bg-p3 border-4 w-fit p-4  h-fit   rounded-xl contact-form flex flex-col items-center justify-around ">
                  <div className=" w-full justify-between flex flex-col"> <label for="name"    onClick={()=>handleLabelClick('name')}     className=" w-full m-1 p-1 sm:m-2 sm:p-2 text-xl md:text-2xl font-extrabold w-36">Name    </label> {  (visibleField === "name"   ) && <input             className=" md:m-2 rounded-e-xl md:p-2 text-2xl font-extrabold text-black h-8 sm:h-auto w-full sm:w-80 md:w-96 "></input>   }</div> 
                  <div className=" w-full justify-between flex flex-col"> <label for="email"   onClick={()=>handleLabelClick('email')}    className=" w-full m-1 p-1 sm:m-2 sm:p-2 text-xl md:text-2xl font-extrabold w-36">Email   </label> {  (visibleField === "email"  ) && <input             className=" md:m-2 rounded-e-xl md:p-2 text-2xl font-extrabold text-black h-8 sm:h-auto w-full sm:w-80 md:w-96 "></input>   }</div> 
                  <div className=" w-full justify-between flex flex-col"> <label for="subject" onClick={()=>handleLabelClick('subject')}  className=" w-full m-1 p-1 sm:m-2 sm:p-2 text-xl md:text-2xl font-extrabold w-36">Subject </label> {  (visibleField === "subject") && <input             className=" md:m-2 rounded-e-xl md:p-2 text-2xl font-extrabold text-black h-8 sm:h-auto w-full sm:w-80 md:w-96 "></input>   }</div> 
                  <div className=" w-full justify-between flex flex-col"> <label for="miss.."  onClick={()=>handleLabelClick('message')}  className=" w-full m-1 p-1 sm:m-2 sm:p-2 text-xl md:text-2xl font-extrabold w-36">Message </label> {  (visibleField === "message") && <input             className=" md:m-2 rounded-e-xl md:p-2 text-2xl font-extrabold text-black h-8 sm:h-auto w-full sm:w-80 md:w-96 "></input>}</div> 
                  {/* <div className="findr w-full justify-between flex  flex-col"> <label for="message" className="m-2 p-2 text-2xl font-extrabold w-36">Message </label> {  (visibleField === "name") && <input             className="m-2 p-2 text-2xl font-extrabold text-black max-w-full"></input>   }</div>  */}
                 

                  <button type="submit" className=" truncate btn-box relative inline-flex justify-center items-center rounded-2xl text-2xl md:text-3xl w-52 h-16 md:w-60 md:h-20 bg-p5 text-black nova-square font-extrabold z-10 m-3 ">Send</button>
                </form>
              </div>
              </div>
            </section>
             {/* sec2 */}
            
            </div>

     );
}
 
export default Contact;