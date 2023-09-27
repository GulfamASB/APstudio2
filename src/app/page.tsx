import React from 'react' 
import Herosection from "./components/Herosection"
import Contact from "../app/contact/page.js"
import Door from "../app/door/page"
import Clip from "@/app/clip/page"



function page() {
  return (
    
    <>
   <Clip/>
   
    <Door />
    <Contact />
  
  
    </>
  );
};

export default page
