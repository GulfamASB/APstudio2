import React from 'react';
import styles from "./formdetails.module.css";
import Formdetails from "@/app/components/Formdetails";
const Contact = () => {
    return (
        <>
<div className={styles.container}>
                <section className={styles.contact_section}>
                <h1>order details</h1>
                    <h2>We'd love to hear <span> from you </span></h2>
                    <Formdetails />
                 </section>
            </div>
        </>
    );
};
export default Contact;