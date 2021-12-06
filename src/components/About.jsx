import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm John!
            <br className="hidden lg:inline-block" />
            Your next junior developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a new developer, freshly qualified from a 14 week intensive,
            industry-led coding bootcamp with Northcoders, experienced in
            pair-programming, TDD, self-study, working to specification and MVP
            using agile practices.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              GET IN TOUCH
            </a>
            <a
              href="https://github.com/John-Ingham"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/john-ingham-389792174/"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              LINKEDIN
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              WORK SO FAR
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./ma-face.jpg"
            style={{ width: 400, height: 500 }}
          />
        </div>
      </div>
    </section>
  )
}

export default About
