import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#ebebeb]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#d22a36]'>About.</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 font-work-sans'>
                <div className='sm:text-right before:text-4xl font-bold'>
                    <p>Hello, I'm Jason, a third-year Computer Engineering student at the University of Toronto.</p>
                </div>
                <div>
                    <p>I'm originally from Vancouver but currently based out of downtown Toronto. In my free time, I like dabbling in web development, data science, and playing video games. Feel free to look around!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About