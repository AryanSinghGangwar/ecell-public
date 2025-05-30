"use client";
import React from "react";
import Image from "next/image";
import NEO from "../public/assets/NEO.png";
import CS from "../public/assets/CS.png";
import Link from "next/link";

const Initiatives = () => {
  return (
    <div
      id="initiatives"
      className="max-h-full mt-20 bg-black bg-[url('/assets/back.png')] bg-no-repeat bg-center bg-cover bg-blend-luminosity"
    >
      <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-3 items-center justify-center text-5xl lg:text-7xl xl:text-[80px] font-bold">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
            Initiatives
          </span>
          <svg
            width="450"
            height="1"
            viewBox="0 0 580 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.5"
              x2="580"
              y2="0.5"
              stroke="url(#paint0_linear_11_3)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_3"
                x1="622.006"
                y1="1"
                x2="-40.7939"
                y2="0.999999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.501042" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:justify-evenly pt-20 gap-20 space-x-5">
          <div className="flex flex-col items-center lg:items-end">
            <div className="">
              <Image
                src={CS}
                alt="My Image"
                width={200}
                height={77}
                className="ml-28"
              />
              <svg
                className="mr-12"
                width="400"
                height="1"
                viewBox="0 0 500 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="604"
                  y2="0.5"
                  stroke="url(#paint0_linear_28_8)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_8"
                    x1="500.362"
                    y1="1"
                    x2="50.6017"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.501042" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="h-full lg:h-fit w-3/4 xl:w-1/2 bg-[#161616] ml-6 lg:ml-0 mt-8 p-8 flex flex-col xl:justify-end">
              <div>
                <div className="uppercase font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                  C-suites
                </div>
                <p className="text-sm xl:text-base mt-2 text-white">
                  C-Suites is a community of like-minded people within VNIT
                  Nagpur where we grow ourselves individually along with people
                  around us. The mission seeks to create a self-sustained
                  ecosystem, where peers discuss and learn from each other
                  through regular group interactions.
                </p>
              </div>
              <Link
                href="https://csuites.ecellvnit.org/"
                target="_blank"
                className="w-full bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase text-center text-lg sm:w-1/2 self-center py-4 mt-10 scale-75 text-white"
              >
                Know More
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <div className="mt-2">
              <Image
                src={NEO}
                alt="My Image"
                width={200}
                height={77}
                className="ml-24 lg:ml-20"
              />
              <svg
                className="mr-12"
                width="380"
                height="1"
                viewBox="0 0 500 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="454"
                  y2="0.5"
                  stroke="url(#paint0_linear_28_8)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_8"
                    x1="330.362"
                    y1="1"
                    x2="-100.6017"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.501042" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="h-full lg:h-fit w-3/4 xl:w-1/2 bg-[#161616] mt-8 p-8 flex flex-col justify-center">
              <div>
                <h1 className="font-bold text-3xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
                  Neo
                </h1>
                <p className="text-sm xl:text-base mt-2 text-white">
                  National Entrepreneurship Olympiad is a PAN - India
                  examination and a skill enhancement program for the students
                  of class 6th to 12th grade to nurture and test their
                  entrepreneurial skills. This Olympiad includes sections like
                  Basic Entrepreneurial Concepts, Value Proposition, Finances...
                </p>
              </div>
              <Link
                href="https://neo.ecellvnit.org/"
                target="_blank"
                className="w-full bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase text-center text-lg sm:w-1/2 self-center py-4 mt-10 scale-75 text-white"
              >
                Know More
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
