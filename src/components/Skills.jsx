import React from 'react'
import CLogo from "../assets/c-lang-logo.png"
import CppLogo from "../assets/cpp-lang-logo.png"
import HtmlLogo from "../assets/html5.png"
import JavaScriptLogo from "../assets/javascript.png"
import PythonLogo from "../assets/python.png"
import ReactLogo from "../assets/react.png"
import CssLogo from "../assets/css.png"
import SparkLogo from "../assets/spark.png"
import NodeLogo from "../assets/nodejs.png"
import FirebaseLogo from "../assets/firebase.svg"
import GitLogo from "../assets/git.png"

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#ebebeb]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-[#d22a36]'>Skills.</p>
                <p className='py-6 font-work-sans'>Programming languages and technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-work-sans'>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={CLogo} alt="clogo" />
                    <p>C</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={CppLogo} alt="cpplogo" />
                    <p>C++</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={PythonLogo} alt="pythonlogo" />
                    <p>Python</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={HtmlLogo} alt="htmllogo" />
                    <p>HTML</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={CssLogo} alt="csslogo" />
                    <p>CSS</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={JavaScriptLogo} alt="javascriptlogo" />
                    <p>JavaScript</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={ReactLogo} alt="reactlogo" />
                    <p>React</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={NodeLogo} alt="reactlogo" />
                    <p>Node</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={FirebaseLogo} alt="reactlogo" />
                    <p>Firebase</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={GitLogo} alt="reactlogo" />
                    <p>Git</p>
                </div>
                <div className='items-center self-center hover:scale-105 duration-500'>
                    <img className="py-4 w-20 mx-auto" src={SparkLogo} alt="sparklogo" />
                    <p>PySpark</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills