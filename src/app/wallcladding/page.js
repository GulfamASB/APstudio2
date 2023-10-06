import React from 'react'
import Wall from '../../app/components/wall'
import Guide from '@/app/components/Orderguide'
import Link from 'next/link'
const Wallcladding = () => {
  return (
    <>
         <section style={{marginBottom:'20rem'}}  class=" bg-gray-200 object-cover relative  flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <div class="video-docker absolute top-0 left-0 w-full h-96 overflow-hidden">
                        <video  class="min-w-full min-h-full absolute object-cover" src="/pro.mp4" type="video/mp4" autoPlay="{true}" muted loop></video>
                        <div style={{ marginTop: '4rem' }} class="relative text-white video-content space-y-2">
                            <h1 class="font-light text-6xl">Whate is your choice</h1>
                            <h3 class="font-light text-3xl">with A Plus Studio</h3>
                            <Link href='/products'>
                            <button type="button" class="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> ORDER</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <Wall /> 
                <Guide />
    </>
  )
}

export default Wallcladding
