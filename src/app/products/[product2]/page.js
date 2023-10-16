"use client"
import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from 'next/image'
import Formdetails from '../../formdetails/page'
const Products = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [moving, setMoving] = useState("right");

  const [steps, setSteps] = useState([
    { name: "Step 1", href: "#", status: "current" },
    { name: "Step 2", href: "#", status: "upcoming" },
    { name: "Step 3", href: "#", status: "upcoming" },
    { name: "Step 4", href: "#", status: "upcoming" }
  ]);

  const prevStep = () => {
    setMoving("left");
    setSteps((old) =>
      old.map((v, i) => {
        if (i === currentStep) {
          v.status = "upcoming";
        } else if (i === currentStep - 1) {
          v.status = "current";
        }
        return v;
      })
    );
    setCurrentStep(currentStep - 1);
    return false;
  };

  const nextStep = async () => {
    setMoving("right");
    // getValues('firstname')

    if (true) {
      setSteps((old) =>
        old.map((v, i) => {
          if (i === currentStep) {
            v.status = "complete";
          } else if (i === currentStep + 1) {
            v.status = "current";
          }
          return v;
        })
      );
      setCurrentStep(currentStep + 1);
    }
    return false;
  };

  const wrapper = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (wrapper.current !== null) {
        setWrapperWidth(wrapper.current.offsetWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div style={{marginBottom:'-9rem'}} className=" bg-white flex">
      <div className=" bg-white flex-1 flex flex-col justify-top items-center py-12 px-4 sm:px-6 ">
      <p style={{marginBottom:'-6rem'}} className=" z-10  bg-black bg-opacity-25 p-5 mb-6 font-light text-white dark:text-gray-400" >
      Modern And Classic Door.
          </p>
        <div
          className="flex  items-start overflow-hidden w-80 sm:w-full"
          ref={wrapper}
        >
          <div className="flex flex-nowrap ">
            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 0}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-full opacity-0`
                  : `translate-x-full opacity-0`
              }
              className="w-0  overflow-visible"
              as="div"
            >
            <div style={{ width: `${wrapperWidth}px` }}>
              <Image className=" rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                width={10000}
                                height={1000}
                                alt=""
                                    src="/a24.jpg" />
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 1}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="bg-red-200 w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
              <Image className=" rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                width={10000}
                                height={1000}
                                alt=""
                                    src="/a24.jpg" />
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 2}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
              <Image className=" rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                width={10000}
                                height={1000}
                                alt=""
                                    src="/AP24.jpg" />
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 3}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="bg-blue-200 w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
              <Image className=" rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                width={10000}
                                height={1000}
                                alt=""
                                    src="/a24.jpg" />
              </div>
            </Transition>
          </div>
        </div>
        <div className={`mt-2`}>
          <p className="text-sm font-medium mb-1 mt-3 text-center">
            Step {steps.findIndex((step) => step.status === "current") + 1} of{" "}
            {steps.length}
          </p>
          <nav
            className="flex items-center justify-center"
            aria-label="Progress"
          >
            <button
              type="button"
              disabled={currentStep === 0}
              onClick={() => prevStep()}
            >
              Prev
            </button>
            <ol className="mx-8 flex items-center space-x-5">
              {steps.map((step, i) => (
                <li key={`step_${i}`}>
                  {step.status === "complete" ? (
                    <a
                      href={step.href}
                      className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
                    >
                      <span className="sr-only"></span>
                    </a>
                  ) : step.status === "current" ? (
                    <a
                      href={step.href}
                      className="relative flex items-center justify-center"
                      aria-current="step"
                    >
                      <span
                        className="absolute w-5 h-5 p-px flex"
                        aria-hidden="true"
                      >
                        <span className="w-full h-full rounded-full bg-indigo-200" />
                      </span>
                      <span
                        className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="sr-only"></span>
                    </a>
                  ) : (
                    <a
                      href={step.href}
                      className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
                    >
                      <span className="sr-only"></span>
                    </a>
                  )}
                </li>
              ))}
            </ol>
            <button
              type="button"
              disabled={currentStep === 3}
              onClick={() => nextStep()}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
    <Formdetails />
    </>
    
  );
};
export default Products