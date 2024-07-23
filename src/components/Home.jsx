import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HeroImg from '../assets/heroImage2.png'
const Home = () => {
    return (
        <>
            <div name="home" className='bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen'>
                <div className='max-w-screen-lg mx-auto h-full flex flex-col justify-center items-center px-4 md:flex-row '>
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-4xl sm:text-7xl font-bold text-white capitalize'>
                            hi, i am frontend developer
                        </h2>
                        <p className='text-gray-500 py-4 max-w-md text-xl'>
                            I am a froment end developer currentl i am studying and persure<strong> BCA</strong> "Bachlor of Computer Application" from <strong>VIPS</strong> " Vivekananda Institue of Professional Studies " and this is my 2nd Year. I am a practicing to build so tha that i can show case my work to the companys so that it will become my bridge to get a job easily.
                        </p>
                        <div className='text-white group w-fit'>
                            <button className='text-xl bg-gradient-to-r py-2 px-3 from-cyan-500 to-blue-500 rounded-md flex items-center hover:scale-105 duration-200 my-2 cursor-pointer'>Portfolio
                                <span className='group-hover:rotate-90 duration-500' fontSize="25px"><ArrowForwardIosIcon className="ml-1" /></span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={HeroImg} alt="" className='rounded-2xl w-2/3 mx-auto md:w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

