import React from 'react';
import styles from "../formdetails/formdetails.module.css";
import Orderdetails from "@/app/components/Orderdetails";
const Contact = () => {
    return (
        <>
        <div className="px-6 w-full">
  <div className="bg-blue-300 h-2 w-full rounded-full relative">
    <span className="bg-white h-4 w-4 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer" style={{left:'75%'}}></span>
    <span className="bg-teal-500 h-2 absolute left-0 top-0 rounded-full" style={{left:'75%'}}></span>
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
                    <h1 >Order Form</h1>
                    <section className={styles.contact_section}>
                        <h2>We'd love to hear <span> from you </span></h2>
                        <Orderdetails />
                    </section>
                </div>
            </div>
        </>
    );
};
export default Contact;