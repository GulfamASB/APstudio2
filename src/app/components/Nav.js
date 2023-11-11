"use client"
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav style={{position:"fixed", zIndex:'20'}} className=" opacity-90 w-full ">
        <div  className="bg-[#292524] justify-between  px-12 mx-auto  md:items-center md:flex">
          <div style={{height:'6rem'}}>
            <div className=" flex items-center  justify-between py-3 md:py-4 md:block">
              <Link style={{marginTop:'-1.6rem'}} href="/" className=" flex items-center">
                <Image
                  src="/log2.svg"
                  alt="ecommerce"
                  className=" object-cover object-center w-full h-full block"
                  width={10}
                  height={0}
                />
              </Link>
              <div style={{marginTop:'-1.6rem'}} className=" md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`opacity-100 flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white font-bold hover:text-cyan-600 mr-4 my-auto  ">
                  <Link href="/">
                    HOME
                  </Link>
                </li>
                <li className="text-white font-bold hover:text-cyan-600 mr-4 my-auto  ">
                  <Link href="/service">
                    SERVICES
                  </Link>
                </li>
                <li className="text-white font-bold hover:text-cyan-600 mr-4 my-auto  ">
                  <Link href="/products">
                    PRODUCTS
                  </Link>
                </li>
                <li className="text-white font-bold hover:text-cyan-600 mr-4 my-auto  ">
                  <Link href="/about">
                    ABOUT US
                  </Link>
                </li>
                <li className="text-white font-bold  hover:text-cyan-600 mr-4 my-auto    " >
                  <Link href="/contacts">
                    CONTACT US
                  </Link>
                </li>
                <li className="text-white font-bold  hover:text-cyan-600 mr-4 my-auto    " >
                  <Link href="/ourteam">
                    OURTEAM
                  </Link>
                </li>
                <li className="text-white font-bold  hover:text-cyan-600 mr-4 my-auto    " >
                  <Link href="/gallry">
                    GALLERY
                  </Link>
                </li>
                <li className="text-white">
                  <Link href='/admin'>
                  <button type="button" className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Login</button>
                    </Link>
                </li>
              </ul>
            </div> 
          </div>
        </div>
      </nav>
    </div>
  );
}