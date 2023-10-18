import React from 'react'
import Image from 'next/image'

const Gallary = () => {
  return (
    <>
      <div style={{marginBottom:'-6rem'}} className=" py-12 bg-slate-100  container mx-auto px-5 lg:px-32 lg:pt-12 ">
      <div style={{marginBottom:'-4rem'}} className="mx-auto max-w-2xl px-4  py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <h1 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white py-2"> Gallery </h1>
  <p className="bg-black bg-opacity-25 text-1xl mb-4 tracking-tight  text-center text-gray-900 dark:text-white"> A Plus Studio has completed some project. you can see in our gallery section. thank you from A Plus Studio. </p>
  </div>
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/AP25.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/gulfam123/image/upload/v1695985485/d706dvjzhwf4us26qafl.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/gulfam123/image/upload/v1695966197/cmcn42org8xcrowk1qlg.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/AP7.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/AP4.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
    <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/AP26.jpg" />
      </div>


      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/a23.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/gulfam123/image/upload/v1695985485/d706dvjzhwf4us26qafl.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/gulfam123/image/upload/v1695966197/cmcn42org8xcrowk1qlg.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      

    <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/AP25.jpg" />
      </div>


    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/a20.jpg" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/a21.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <Image
        width={1000}
        height={100}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/a24.jpg" />
      </div>
     
    </div>
  </div>
</div>

    </>
  )
}

export default Gallary
