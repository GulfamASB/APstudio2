import React from 'react' 
import Herosection from "./components/Herosection"
import Contacts from "../app/contacts/page.js"
import Door from "../app/door/page"
import Clip from "@/app/clip/page"



function page() {
  return (
    
    <>
   <Clip/>
   
    <Door />
    <Contacts />
  
  
    </>
  );
};

export default page
