import React from 'react';

import { text } from 'stream/consumers';
import Image from "next/image";

const about = () => {
  return (
    <>
      <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <h1 style={{ color: 'Black', textAlign: 'center', marginBottom: '-4rem', fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'serif', font: 'extrabold' }} > ABOUT US</h1>
        <div class="container px-7 py-24 mx-auto flex flex-wrap">
          <div class="-mx-4 flex flex-wrap items-center justify-between">
            <div class="w-full px-4 lg:w-6/12">
              <div class="-mx-3 flex items-center sm:-mx-4">
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="py-3 sm:py-4">
                    <Image
                      width={1000}
                      height={1000}
                      src="/AP6.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                  <div class="py-3 sm:py-4">
                    <Image
                      width={1000}
                      height={1000}
                      src="/AP5.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="relative z-10 my-4">
                    <Image
                      width={1000}
                      height={1000}
                      src="/AP4.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="mt-10 lg:mt-0  Justify-Content">
                <span class="text-primary mb-2 block text-lg font-semibold wrapper">
                  Why Choose Us
                </span>
                <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                  A PLUS STUDIO is specialized in manufacturing engineered products
                </h2>
                <p class="text-body-color mb-8 text-base text-justify">
                  It is specialized in manufacturing engineered products, design and installation of residential main gates, railings, shower Cabins,
                  spiders and stair construction for Residence, Commercial, Industrial, Health Care,
                  Educational, Governmental work and so on as we believe in creating difference,
                  by our innovative ideas which then converted into design to make a new product.
                  Our motto is to provide a complete high quality finished product for your dream project’s architectural division.
                  A PLUS STUDIO noted for ensuring elegant execution of the most innovative and artful designs and its uniqueness in the market.
                  We are launching our brand New product in the market named Shower Cabin which has got uniqueness by its structure.
                </p>
                <p class="text-body-color mb-12 text-base text-justify" style={{ marginBottom: '-9.2rem' }}>
                  The organizations segments include sustainability, workforce relations, and business intelligence with honesty.
                  Our innovative, self designed and fabricated products improve the quality of life with a new passion of style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}; export default about;
