import React from 'react'
import Image from "next/image"

const Ourteam = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"></link>
      <div class="flex items-center justify-center min-h-screen bg-white py-48">
    <div class="flex flex-col">

        <div class="flex flex-col mt-8">
         
            <div class="container max-w-7xl px-4">
             
                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-6/12 px-4">
       
                        <h1 class="text-gray-900 text-4xl font-bold mb-8">
                            Meet the Team
                        </h1>

                        <p class="text-gray-700 text-lg font-light">
                            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                        </p>
                    </div>
                </div>

    
                <div class="flex flex-wrap">
              
                    <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div class="flex flex-col">
                  
                            <a href="#">
                                <Image class="rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                width={1000}
                                height={1000}
                                alt="CEO"
                                    src="/CEO.jpg" />
                            </a>


                            <div class="text-center mt-6">
                   
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                Aamir Ahmed
                                </h1>

                         
                                <div class="text-gray-700 font-light mb-2">
                                    CEO & Founder
                                </div>

                           
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                    transition-opacity duration-300">
                          
                                    <a href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                                  
                                    <a href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                
                  
                   
                
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default Ourteam
