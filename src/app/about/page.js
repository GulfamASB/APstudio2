import React from 'react'
import styles from "../../app/styles/common.module.css"
import { text } from 'stream/consumers';
import Image from "next/image"

const about=()=> {
  return (
    <>
    <h1 style={{ color: 'Black', textAlign:'center', marginBottom:'1.6rem', fontSize:'2.5rem',fontWeight:'bold',fontFamily:'mulish'}} > About US</h1>
      <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <Image class="w-full rounded-lg" src="/AP1.jpg" width={100} height={100} alt="office content 1"/>
            <Image class="mt-4 w-full lg:mt-10 rounded-lg" src="/AP1.jpg" width={100} height={100} alt="office content 2"/>
        </div>
    </div>
</section>
    </>
  )
};export default about;
