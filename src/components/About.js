import React from 'react';
import { Button } from 'flowbite-react';
import { IoMdMail } from "react-icons/io";

export default function About() {
    return (
        <div class="md:container md:mx-auto">
            <div className="flex items-center">
                <h1 className="lg:text-4xl md:text-2xl text-xl font-poppins text-black font-semibold drop-shadow">
                    about me
                </h1>
                <hr className="w-28 md:w-48 h-1 my-4 mx-4 bg-pinkLight border-0 rounded md:my-10" />
            </div>
            <p className="text-navy font-poppins drop-shadow">
                I am a highly motivated, confident and enthusiastic third year Bachelor's 
                <b> CSE student </b>
                    at
                <a href="https://www.tudelft.nl/"> TU Delft </a> 
                with a great passion in 
                <b> software engineering, data science </b>
                and 
                <b> computer graphics. </b>
                <br />
                I actively seek new experiences in which creativity can be interwoven with critical thinking.
                <br />
                In my free time, I enjoy writing creatively, practicing sports and travelling.
            </p>
            <div className="my-5">
                <Button size="sm" gradientDuoTone="redToYellow">
                    <IoMdMail className="text-lg mr-2" /> 
                    <a href="mailto:anabatrineanu88@gmail.com" className="font-poppins font-semibold">Let's chat!</a>
                </Button>
            </div>
        </div>
    );
}