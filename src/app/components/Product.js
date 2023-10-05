import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (

      <div class="bg-stone-300">
     <div  class="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <h1 class="mb-4 text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 dark:text-white"></h1>
          <div class="space-y-16">
            <div
              class=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div class="w-full md:w-1/4 space-y-4">
                <h3 class="font-medium text-2xl">Door</h3>
                <h2>.........</h2>
                <p>
                  The product is equipped with an advanced facial recognition system that can accurately identify and authenticate individuals based on their unique facial features. This feature provides enhanced security by allowing access only to authorized users
                </p>
              </div>
              <div class="mx-auto w-1/2 md:w-1/3">
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
          class=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div class="w-full md:w-1/4 space-y-4">
            <h3 class="font-medium text-2xl">Multi-Device Synchronization</h3>
            <p>
              Multi-Device Synchronization
              Description: This product offers seamless synchronization across multiple devices. Users can easily sync their data, settings, and preferences across devices such as smartphones, tablets, and computers.
            </p>
          </div>
          <div class="mx-auto w-1/2 md:w-1/3">
            <Image
              src="/AP7.jpg"
              alt="ecommerce"
              width={400}
              height={100}
            />
          </div>
        </div>
        <div class="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div class="space-y-16">
            <div
              class=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div class="w-full md:w-1/4 space-y-4">
                <h3 class="font-medium text-2xl">Advanced Wall Cladding</h3>
                <p>
                  The product is equipped with an advanced facial recognition system that can accurately identify and authenticate individuals based on their unique facial features. This feature provides enhanced security by allowing access only to authorized users
                </p>
              </div>
              <div class="mx-auto w-1/2 md:w-1/3">
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
          class=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div class="w-full md:w-1/4 space-y-4">
            <h3 class="font-medium text-2xl">Multi-Device Synchronization</h3>
            <p>
              Multi-Device Synchronization
              Description: This product offers seamless synchronization across multiple devices. Users can easily sync their data, settings, and preferences across devices such as smartphones, tablets, and computers.
            </p>
          </div>
          <div class="mx-auto w-1/2 md:w-1/3">
            <Image
              src="/AP7.jpg"
              alt="ecommerce"
              width={400}
              height={100}
            />
          </div>
        </div>
        </div>

  );
};
export default Product
