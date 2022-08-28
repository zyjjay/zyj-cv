import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
import Resume from './Resume'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#181a18]">
        <div>
            {/* <img src={Radiant} alt='home logo' style={{width: "50px"}} className='cursor-pointer'/> */}
            <p className='cursor-pointer text-2xl font-bold md:flex font-montserrat pl-4'>zyj.</p>
        </div>

        {/* Menu */}

        <ul className='hidden md:flex font-montserrat'>
            <li>
                <Resume />
            </li>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            {/* <li>Experiences</li> */}
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
 

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars className='cursor-pointer'/> : <FaTimes className='cursor-pointer'/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#e3e5e0] flex flex-col justify-center items-center font-montserrat'}>
            <li className='py-6 text-4xl'>
                <div onClick={handleClick}>
                    <Resume />
                </div>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>   
            {/* <li className='py-6 text-4xl'>Experiences</li> */}
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]'>
                    <a className='flex justify-between items-center w-full text-[#181a18] font-montserrat' 
                        href="https://www.linkedin.com/in/jason-zhang-615721217/" target='_blank'>LinkedIn<FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-[#181a18] font-montserrat' 
                        href="https://github.com/zyjjay" target='_blank'>Github<FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f9f5ec]'>
                    <a className='flex justify-between items-center w-full text-[#181a18] font-montserrat' 
                        href="/">Mail<HiOutlineMail size={30}/></a>
                </li>
            </ul>
        </div> */}
    </div> 
  )
}

export default Navbar