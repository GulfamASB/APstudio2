import React from 'react'
import Image from "next/image"
import  styles  from './service.module.css'
import heroStyles from "@/app/styles/herosection.module.css"
const Services = () => {
  return (
    <>
<main style={{marginBottom: '-9rem'}} className={heroStyles.main_section}>
<div  style={{fontFamily:'Bodoni MT'}} className=" py-24 bg-stone-200 ">
        <div className="relative z-10 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto ">
          <h1  className=" text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 dark:text-black"> About Services</h1>
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl">Advanced Wall Cladding</h3>
                <p>
                  The product is equipped with an advanced facial recognition system that can accurately identify and authenticate individuals based on their unique facial features. 
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src="/AP3.jpg"
                  alt="ecommerce"
                  width={400}
                  height={100}
                />
              </div>
            </div>

          </div>
        </div>
        <div
          className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="font-medium text-2xl">Multi-Device Synchronization</h3>
            <p>
                  The product is equipped with an advanced facial recognition system that can accurately identify and authenticate individuals based on their unique facial features. 
                </p>
          </div>
          <div className="mx-auto w-1/2 md:w-1/3">
            <Image
              src="/AP7.jpg"
              alt="ecommerce"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className={heroStyles['custom-shape-divider-top-1697868820']}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={heroStyles['shape-fill']}></path>
    </svg>
</div>

</main>
    </>
  )
}

export default Services
