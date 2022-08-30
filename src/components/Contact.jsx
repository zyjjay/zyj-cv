import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name="contact" className='max-w-[1000px] mx-auto pt-10 p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-5xl font-bold inline border-b-4 border-[#d22a36]'>Get in touch.</p>
        <p className='pt-6 font-work-sans'>You can find my social links below, feel free to reach out! :)</p>
        <div className='social-container flex justify-center'>
                <div className='linkedin-btn py-2 mr-2 my-2 rounded-full hover:cursor-pointer'>
                    <a href="https://www.linkedin.com/in/zyj-jason/" target='_blank' rel="noreferrer"><FaLinkedin className='linkedin-icon ' size={35}/></a>
                </div>
                <div className='github-btn px-2 py-2 mx-2 my-2 rounded-full hover:cursor-pointer'>
                    <a href="https://github.com/zyjjay" target='_blank' rel="noreferrer"><FaGithub className='github-icon' size={35}/></a>
                </div>
                <div className='email-btn py-2 ml-2 my-2 rounded-full hover:cursor-pointer'>
                    <a href="mailto:jasonyj.zhang@mail.utoronto.ca?subject=Reaching out!">
                        <HiOutlineMail className='email-icon' size={35}/>
                    </a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact 