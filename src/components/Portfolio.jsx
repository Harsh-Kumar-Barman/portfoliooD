import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        }
    ]
    return (
        <>
            <div name="portfolio" className='w-full bg-gradient-to-b from-black to-gray-800'>
                <div className='max-w-scerrn-lg flex flex-col p-6 mx-auto justify-center w-full h-full text-white'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Portfolio</p>
                        <p className='py-5'>Check out my work here </p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0'>
                        {portfolio.map((item) =>
                        (<div key={item.id} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={item.src} alt="logoImg" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio