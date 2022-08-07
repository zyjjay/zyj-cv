import React from 'react'

const Contact = () => {
  return (
    // <div name="contact" className='w-full h-screen bg-[#ededed] flex justify-center items-center p-4'>
    //     <div className='pb-8 flex flex-col justify-center w-full'>
    //       <p className='text-4xl font-bold inline border-b-4 border-[#d22a36] '>Get in touch.</p>
    //       <p className='py-6 font-work-sans'>Shoot me a message on LinkedIn or send me an email @ jasonyj.zhang@mail.utoronto.ca</p>
    //     </div>
    // </div>
    <div name="contact" className='max-w-[1000px] mx-auto pt-10 p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-5xl font-bold inline border-b-4 border-[#d22a36]'>Get in touch.</p>
        <p className='py-6 font-work-sans'>Shoot me a message on LinkedIn or send me an email at jasonyj.zhang@mail.utoronto.ca if you would like to get in touch and discuss my experiences!</p>
      </div>
    </div>
  )
}

export default Contact 