import React from 'react';
import styles from "./formdetails.module.css";
import Formdetails from "@/app/components/Formdetails";
import Product from '@/app/components/Product'
const Contact = () => {
    return (
        <>

                <section style={{marginBottom:'-35rem'}} class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                    <div class="video-docker absolute top-0 left-0 w-full h-96 overflow-hidden">
                        <video class="min-w-full min-h-full absolute object-cover" src="pro.mp4" type="video/mp4" autoplay="{true}" muted loop></video>
                        <div style={{ marginTop: '6rem' }} class="relative text-white video-content space-y-2">
                            <h1 class="font-light text-6xl">Whate is your choice</h1>
                            <h3 class="font-light text-3xl">with A Plus Studio</h3>
                            <button type="button" class="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> ORDER</button>
                        </div>
                    </div>
                </section>
                
    <Product/>



    <div  className="px-6 w-full">
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
            <div className='relative z-10 my-4' >
                <div className={styles.container}>
                    <h1>Order Details</h1>
                    <section className={styles.contact_section}>
                        <h2>We'd love to hear <span> from you </span></h2>
                        <Formdetails />
                    </section>
                </div>
            </div>
        </>
    );
};
export default Contact;