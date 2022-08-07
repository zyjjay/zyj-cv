import React from 'react'
import Nftracker from "../assets/nftracker.png"
import Mappr from "../assets/mappr.png"
import Zenmo from "../assets/zenmo-landing.png"
import Spacetagram from "../assets/spacetagram.png"


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-[#d22a36]'>Projects.</p>
                <p className='py-6 font-work-sans'>Hover over each card to learn about the ideas I've worked on in the past.</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 font-work-sans'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Mappr})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Google Maps clone
                        </span>
                        <div className='pt-8 text-center'>
                                <button disabled className='opacity-50 hover:cursor-not-allowed text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                <button disabled className='opacity-50 hover:cursor-not-allowed text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>GitHub</button>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Nftracker})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            NFT Price Monitoring web app
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://nft-tracker-2cce7.web.app/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zyjjay/nft-react-firebase-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Spacetagram})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Instagram for astronomy pictures
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://zyjjay.github.io/shopify-spacetagram/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/zyjjay/shopify-spacetagram" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Zenmo})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Productivity web app
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://devpost.com/software/zen-mo" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Devpost</button>
                            </a>
                            <a href="https://github.com/dylncheng/productivity-app" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects