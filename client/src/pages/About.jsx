import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
       <div className="max-w-2xl mx-auto p-3 text-center">
       <div>
        <h1 className='text-3xl font font-semibold text-center my-7'>About Pratyush Blog</h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
          <p>
          Welcome to Pratyush's Blog! This blog was created by 
          Pratyush Shankar as a personal project to his thought and ideas 
          with the world. Pratyush is a passionate developer 
          who loves to write about technology, coding and everything in between.
        </p>
        <p>On this blog, you'll find weekly articles on topics such as 
        web development , software engineering and programming language.
        Pratyush is always learning and explorin new technolgies so be sure
         to back to often for new content.</p>

         <p>We encourage  you to leave comments on our posts and engage with 
         other readers. You can like other people's comments and 
         reply  to them as well. We believe that a community of learners 
         can help each other grow and improve.</p>
          </div>
      </div>
       </div>
    </div>
  )
}

export default About