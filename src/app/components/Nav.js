"use client"
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#" class="flex items-center">
                <Image
                  src="/AP.png"
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  width={50}
                  height={50}
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">A PLUS STUDIO</span>
              </a>
              <div className="md:hidden">
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white font-bold hover:text-teal-600 mr-4 my-auto  ">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white font-bold hover:text-teal-600 mr-4 my-auto  ">
                  <Link href="/blogs">
                    products
                  </Link>
                </li>
                <li className="text-white font-bold hover:text-teal-600 mr-4 my-auto  ">
                  <Link href="/about">
                    About US
                  </Link>
                </li>
                <li className="text-white font-bold  hover:text-teal-600 mr-4 my-auto    " >
                  <Link href="/contact">
                    Contact US
                  </Link>
                </li>

                <li className="text-white">
                  <button class="bg-cyan-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-gray-500 rounded">
                    Button
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}




