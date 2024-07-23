import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navLinks = [
        {
            id: 1,
            content: "home"
        },

        {
            id: 2,
            content: "about"
        },
        {
            id: 3,
            content: "portfolio project"
        },
        {
            id: 4,
            content: "experience"
        },
    ]
    return (
        <>
            <nav className='flex justify-between items-center bg-gradient-to-b from-gray-900 to-black px-5 h-20 w-full fixed z-50'>
                <div>
                    <h1 className='text-white text-3xl'>Harsh</h1>
                </div>
                <div>
                    <ul className='justify-center items-center gap-4 hidden md:flex' >
                        {navLinks.map((links) => <li className=' hover:scale-105 duration-200 capitalize text-gray-500 cursor-pointer px-2 text-2xl' key={links.id}>{links.content}</li>)}

                    </ul>
                    <div onClick={() => setNav(!nav)} className='cursour-pointer ml-4 z-50 md:hidden text-gray-400'>
                        {nav ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
                    </div>
                    <div>
                        {nav && <ul className='justify-center flex-col items-center gap-4 flex md:hidden absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 z-50' >
                            {navLinks.map((links) => <li className=' hover:scale-105 duration-200 capitalize text-gray-500 cursor-pointer px-4 py-6 text-4xl' key={links.id}>{links.content}</li>)}

                        </ul>
                        }</div>
                </div>
            </nav>
        </>
    )
}

export default Navbar