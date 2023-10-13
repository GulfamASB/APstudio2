import React from 'react'

const hings = () => {
  return (
    <>
      <section style={{ marginTop: '-9rem' }} className="relative z-10 my-4 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <video src=
          "/AP11.mp4"
          autoPlay="{true}" loop muted
          className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>
        <div className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <h1 style={{ marginTop: '8rem' }} className="relative z-10 my-4 mb-4 text-4xl mb-8 tracking-tight font-extrabold text-left text-white">Dream bigger. With 	high-quality hinges. </h1>
        </div>
        <div className="space-y-16">
          <div style={{ marginTop: '-5rem' }}
            className=" relative z-10 my-4 text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-right ">
            <div className=" text-center text-white w-full md:w-1/4 space-y-4">
              <p className='font-light'>
                Our new System One. Giving you even more room to dream.
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">New System One</button>
            </div>
          </div>
        </div>
        <div className="relative z-10 my-4 container px-7 py-24 mx-auto flex flex-wrap">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="mt-10 lg:mt-0  Justify-Content">
            <h2 className=" relative z-10 my-4 text-dark mb-8 text-3xl font-bold sm:text-4xl text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
              A PLUS STUDIO
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default hings
