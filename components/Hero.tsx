"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Buttons from "./Buttons";


const Hero = () => {
  return (
    <>
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h3 className="flex justify-center font-semibold">Hi 👋 There, I&apos;m Elie</h3>
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Software Engineer
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
        Transforming Concepts into Seamless User Experiences
        </p>
      </div>
      <Buttons />
      <BackgroundBeams />
    </div>
    </>
    
  );
}

export default Hero;