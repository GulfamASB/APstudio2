import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const futured_product = () => {
  return (
    <>
      <section style={{ marginBottom: '-6rem' }} class="relative z-10 my-4 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <video src=
          "/pro.mp4"
          autoplay="{true}" loop muted
          className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>
        <div style={{ marginTop: '5rem' }} class="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">


        </div>
        <div  class="space-y-16">
          <div
           class=" relative z-10 my-4 text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
            <div class=" text-white w-full md:w-1/4 space-y-4">
            <h1 style={{ marginLeft: 20, marginRight: 20 }} class="relative z-10 my-4 mb-4 text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 text-white"> A Plus Studio featured projects </h1>
              <p style={{ marginLeft: 20, marginRight: 20 }} className='font-light'>
                A Plus Studio pivot hinges are applied to residential and commercial pivot door projects from all over the world. and we provide perfect & high-quality Wall Cladding. 
              </p>
            </div>
            <div class="mx-auto w-1/2 md:w-1/3">
              <Link href="/gallery">
              <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Inspired</button>
            </Link>
            </div>
          </div>

        </div>

        <div class="relative z-10 my-4 container px-7 py-24 mx-auto flex flex-wrap">
          <div class="-mx-4 flex flex-wrap items-center justify-between">


          </div>
        </div>
      </section>

    </>
  )
}

export default futured_product