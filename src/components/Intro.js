import React, { useState, useEffect } from "react";
import pic from "../ana.jpg"
import neuralnetwork from "../neural-network.png"
import Typewriter from "./Typewriter";

const BlinkingCursor = () => (
  <span className="Cursor inline-block animate-blink text-pinkLight px-1">|</span>
);

export default function Intro() {
  const [startWriting, setStartWriting] = useState(false);
  const [startBlinking, setStartBlinking] = useState(false);
  const text1 = "hey there, ";
  const text2 = "I am Ana Batrineanu";
  const delay = 150;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartWriting(true);
    }, text1.length * delay);

    return () => clearTimeout(timeout);
  }, [text1.length, delay]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartBlinking(true);
    }, (text1.length + text2.length + 2) * delay);

    return () => clearTimeout(timeout);
  }, [text1.length + text2.length + 2, delay]);

  return (
      <div class="md:container md:mx-auto md:px-10 px-5">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-poppins text-black leading-10 md:text-center py-10 font-semibold drop-shadow h-[150px]">
          <Typewriter text={text1} delay={delay}/>
          <br className="md:hidden" />
          {startWriting && <Typewriter text={text2} delay={delay} />}
          {startBlinking && <BlinkingCursor />}
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