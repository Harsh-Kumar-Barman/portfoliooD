import React from 'react'

const About = () => {
  return (
    <>
      <div name="about" className='w-full bg-gradient-to-b from-gray-800  to-black h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
          </div>
          <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates corrupti molestiae reiciendis at reprehenderit, eaque quia, necessitatibus labore nesciunt amet doloribus magni cupiditate recusandae quas et, aut minima perspiciatis temporibus pariatur. Quas corrupti minus perferendis vero quam quo quos?
          </p>
          <br />
          <p className='text-xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta tenetur eius omnis ducimus quas nisi, facere pariatur totam inventore nam, saepe vitae perferendis optio veritatis hic quod. Id quia rerum fuga alias cum! Qui corporis minima eum ad, illo molestias delectus quasi ipsam libero omnis aliquam impedit, saepe officia accusamus?</p>
        </div>
      </div>
    </>
  )
}

export default About