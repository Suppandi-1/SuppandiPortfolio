import 'boxicons';


const Contact = () => {

    return ( 
        <div className="w-full h-full flex justify-around">
            {/* sec1 */}
            <section className='findb h-auto w-3/5 mt-32  flex flex-col  justify-around'>
            <h1 className="  text-5xl  text-cyan-400 font-extrabold text-center  "> Message <b className="text-cyan-100"> Me </b> </h1>
            <div className="  h-5/6  flex justify-around  items-center flex-col mb-10">
            <form class="  border-4 w-fit p-4  h-fit border-solid border-[cyan]  rounded-xl contact-form flex flex-col items-center justify-around ">
                <div    class="form-group ">
                  <label className="m-2 p-2 text-2xl font-extrabold w-36 " for="name">Name :</label>
                  <input className="m-2 p-2 text-2xl font-extrabold text-black max-w-full" type="text" id="name" name="name" required/>
                </div>
        
                <div class="form-group">
                  <label className="m-2 p-2 text-2xl font-extrabold w-36" for="email">Email :</label>
                  <input className="m-2 p-2 text-2xl font-extrabold  text-black" type="email" id="email" name="email" required/>
                </div>
        
                <div class="form-group">
                  <label className="m-2 p-2  text-2xl font-extrabold w-36" for="subject">Subject :</label>
                  <input className="m-2 p-2  text-2xl font-extrabold  text-black" type="text" id="subject" name="subject" required/>
                </div>
        
                <div class="form-group">
                  <label    className="m-2 p-2  text-2xl font-extrabold w-36 " for="message">Message :</label>
                  <textarea className="m-2 p-2  text-2xl font-extrabold  text-black" id="message" name="message" rows="4" required></textarea>
                </div>

                <button type="submit" className=" btn-box relative inline-flex justify-center items-center rounded-2xl text-3xl w-60 h-20 bg-cyan-600 font-extrabold z-10 m-3 ">Send</button>
            </form>
            </div>
            </section>
            {/* sec2 */}
            <section className=" mt-28 mx-10 w-1/2  flex flex-col justify-around">
                <h1 className="text-5xl  text-cyan-400 font-extrabold text-center  "> Find <b className="text-cyan-100"> Me </b> </h1>  
                {/* <div> */}
                    
                <div class="social-media  flex flex-row justify-around h-4/5 flex-wrap ">
                    <a href="https://www.linkedin.com/in/devesh-suthar-/"   className="  border-4 border_neone border-solid rounded-full flex justify-center items-center h-fit w-fit m-12 p-9 hover:bg-slate-500 hover:border-cyan-300 transition-colors duration-700 hover:shadow-white" target="_blank"><box-icon type='logo' color="cyan" size="4rem" name='linkedin'></box-icon></a>
                    <a href="https://x.com/DeveshDaku"                      className="  border-4 border_neone border-solid rounded-full flex justify-center items-center h-fit w-fit m-12 p-9 hover:bg-slate-500 hover:border-cyan-300 transition-colors duration-700 hover:shadow-white" target="_blank"><box-icon type='logo' color="cyan" size="4rem" name='twitter'></box-icon></a>
                    <a href="https://www.instagram.com/devesh__s"           className="  border-4 border_neone border-solid rounded-full flex justify-center items-center h-fit w-fit m-12 p-9 hover:bg-slate-500 hover:border-cyan-300 transition-colors duration-700 hover:shadow-white" target="_blank"><box-icon type='logo' color="cyan" size="4rem" name='instagram'></box-icon></a>
                    <a href="https://github.com/Devesh-daku"                className="  border-4 border_neone border-solid rounded-full flex justify-center items-center h-fit w-fit m-12 p-9 hover:bg-slate-500 hover:border-cyan-300 transition-colors duration-700 hover:shadow-white" target="_blank"><box-icon type='logo' color="cyan" size="4rem" name='github'></box-icon></a>
                    <a href="https://discord.gg/PG4qCMc8B9"                 className="  border-4 border_neone border-solid rounded-full flex justify-center items-center h-fit w-fit m-12 p-9 hover:bg-slate-500 hover:border-cyan-300 transition-colors duration-700 hover:shadow-white" target="_blank"><box-icon type='logo' color="cyan" size="4rem" name='discord'></box-icon></a>
                    <a href="mailto:suthar.d@outlook.com"                   className="  border-4 border_neone border-solid rounded-full flex justify-center items-center h-fit w-fit m-12 p-9 hover:bg-slate-500 hover:border-cyan-300 transition-colors duration-700 hover:shadow-white" target="_blank"><box-icon type='logo' color="cyan" size="4rem" name='gmail'></box-icon></a>
                {/* </div> */}
                </div>
  
            </section>
        </div>
     );
}
 
export default Contact;