import React from "react";
import pic from "../ana.jpg"
import neuralnetwork from "../neural-network.png"

export default function Intro() {
  return (
      <div class="md:container md:mx-auto md:px-10 px-5">
        <h1 className="lg:text-5xl text-2xl font-poppins text-black leading-10 md:text-center py-10 font-semibold drop-shadow">
          hey there, <br className="md:hidden"/>I am Ana Batrineanu
        </h1>
        <div className="flex flex-col">
          <div class="flex justify-center items-center">
            <div class="md:w-3/4 xl:w-8/12 w-8/12">
              <img src={neuralnetwork} class="opacity-20" alt="Neural network" />
            </div>
            <div class="">
              <img src={pic} className="border-white border-2 md:w-60 md:h-60 w-28 h-28 object-cover rounded-full" alt="My picture" />
            </div>
          </div>
          <div className="">
            <h3 className="text-xs mt-5 md:text-xl font-poppins text-black font-semibold drop-shadow">
              💻 I am a computer science and engineering student at TU Delft
            </h3>
          </div>
        </div>
      </div>
  );
}