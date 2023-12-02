// import {boxicons} from 'boxicons'


const Nav = () => {

return ( 
    <nav className="fixed top-0 left-0 z-10 flex justify-around w-full px-[9%] py-[2rem] text-xl Nav">
        <h3 className="p-[5px] font-bold text-5xl">
            <a href="/" className=''>
                Suppandi
            </a>
        </h3>
        <img  
            className="text-4xl cursor-pointer menu-icon" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAsklEQVRoQ+3W0QnDMAwGYWeEQvafsNAR2g2qhw9TXC7vvyzdyUmudfhzHd7/aoBfG8xABpBAK4QAOZ4BRogF/t/A6/l8IySKP+77K+TRQAMQ/7UygAC3x8c7sL0DPKABECDHM8AIscBooA8ZEu5DdvwK4QZsj4+XeHsHeEADIECOZ4ARYoHRwPGv0QbAFelXAgFuj4+XeHsHeEADIECOZ4ARYoEMIECOZ4ARYoEMIECOfwCSdjAxtGU/tgAAAABJRU5ErkJggg=="
        />
        <div>
            <ul className="flex justify-end font-bold">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Skills">Skills</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Blogs">Blogs</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
 );
}
 
export default Nav;