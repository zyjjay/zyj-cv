import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#d22a36] text-2xl sm:text-5xl font-montserrat'>Hey! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold font-montserrat'>Jason Zhang</h1>
            <h2 className='pt-4 text-1xl sm:text-3xl text-[#4C4E52] font-work-sans'>A third-year Computer Engineering Student. </h2>

            <div className='social-container flex'>
                <div className='linkedin-btn py-2 mr-2 my-2 rounded-full hover:cursor-pointer'>
                    <a href="https://www.linkedin.com/in/jason-zhang-615721217/" target='_blank'><FaLinkedin className='linkedin-icon ' size={35}/></a>
                </div>
                <div className='github-btn px-2 py-2 mx-2 my-2 rounded-full hover:cursor-pointer'>
                    <a href="https://github.com/zyjjay" target='_blank'><FaGithub className='github-icon' size={35}/></a>
                </div>
                <div className='email-btn py-2 ml-2 my-2 rounded-full hover:cursor-pointer'>
                    <a href="mailto:jasonyj.zhang@mail.utoronto.ca?subject=Reaching out!">
                        <HiOutlineMail className='email-icon' size={35}/>
                    </a>
                </div>
            </div>

            {/* <div>
                <button href="#_" class="flex items-center px-3 py-2 text-lg text-white bg-[#d22a] rounded-sm hover:bg-[#d22a36] sm:w-auto sm:mb-0 duration-200" data-rounded="rounded-2xl" data-primary-reset="{}">
                Let's Chat!<BiCoffee className='ml-2'/>
                </button>
            </div> */}


        </div>
    </div>
  )
}

export default Home