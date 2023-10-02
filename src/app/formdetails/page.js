import React from 'react';
import styles from "./formdetails.module.css";
import Formdetails from "@/app/components/Formdetails";
import Products from "@/app/products/page"
const Contact = () => {
    return (
        <>

           
            <video src=
          "/pro.mp4"
          autoplay="{true}" loop muted
          className="absolute z-10 w-auto 
            h-350 w-10">
        </video>
            <div className='relative z-10 my-4' style={{ marginTop: '45rem' }}>
                <div   style={{ marginTop: '-30rem' }} className={styles.container}>
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