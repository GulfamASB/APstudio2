import React from 'react'

const Products = () => {
  return (
    <> 
       <video src=
          "/pro.mp4"
          autoplay="{true}" loop muted
          className="absolute z-10 w-auto 
            h-350 w-10">
        </video>
        <div className="px-6 w-full">
  <div className="bg-blue-300 h-2 w-full rounded-full relative">
    <span className="bg-white h-4 w-4 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer" style={{left:'50%'}}></span>
    <span className="bg-teal-500 h-2 absolute left-0 top-0 rounded-full" style={{left:'50%'}}></span>
  </div>
  <div className="flex justify-between mt-2 text-xs text-gray-600">
    <span className="w-8 text-left">0%</span>
    <span className="w-8 text-center">25%</span>
    <span className="w-8 text-center">50%</span>
    <span className="w-8 text-center">75%</span>
    <span className="w-8 text-right">100%</span>
  </div>
</div>
    </>
  )
}

export default Products
