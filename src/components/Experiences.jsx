import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experiences = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'react',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: nextjs,
            title: 'nextjs',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: graphql,
            title: 'graphql',
            style: 'shadow-pink-500'
        },
        {
            id: 7,
            src: github,
            title: 'github',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: tailwind,
            title: 'tailwind',
            style: 'shadow-sky-500'
        },
    ]
    return (
        <>
            <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
                <div className='max-w-screen-lg mx-auto p-4 flex flex-col jus w-full h-full text-white'>
                    <div>
                        <p className='text-4xl font-bold border-b-4 border-gray-500 py-2 inline'>Experiences</p>
                        <p className='py-6'>There are the few projects I've worked on them</p>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12sm:px-0'>
                        {tech.map((item) => (

                            <div key={item.id} className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${item.style}`}>
                                <div>
                                    <img src={item.src} alt="" className='w-20 mx-auto' />
                                    <p className='capitalize'>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiences