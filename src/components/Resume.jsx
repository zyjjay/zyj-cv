import React from 'react'
import ResumePDF from "../assets/jason-zhang-resume.pdf"
import { AiOutlinePaperClip } from 'react-icons/ai'

const Resume = () => {

  return (
    <div>
        <a href={ResumePDF} rel="noopener noreferrer" target="_blank">
            <button className="bg-[#d1363a] hover:bg-[#dd6c6e] text-[#f9f9f9] duration-300 font-bold py-2 px-4 rounded flex items-center">
                Resume<AiOutlinePaperClip className='ml-1'/>
            </button>
        </a>
    </div>
  )
}
export default Resume