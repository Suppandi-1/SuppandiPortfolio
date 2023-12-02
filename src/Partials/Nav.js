// import {boxicons} from 'boxicons'
import {Link} from 'react-router-dom';

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
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Blogs">Blogs</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
 );
}
 
export default Nav;