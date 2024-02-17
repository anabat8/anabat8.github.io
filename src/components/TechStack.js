import React from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";

export default function TechStack() {
    return (
        <div class="md:container md:mx-auto">
            <div className="flex items-center">
                <h1 className="lg:text-4xl md:text-2xl text-xl font-poppins text-black font-semibold drop-shadow">
                    tech stack
                </h1>
                <hr className="w-28 md:w-48 h-1 my-4 mx-4 bg-pinkStandard border-0 rounded md:my-10" />
            </div>
            <p className="text-navy font-poppins drop-shadow">
                <b> Here are some of the technologies I have been mostly working with: 
                <ul className="gap-3 columns-2 my-5 space-y-3">
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        Java
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        Python
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        JavaScript
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        C#
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        C++
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        Scala
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        React.js
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        Spring Boot
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkOutline className="mr-2"/>
                        .Net
                    </li>
                </ul>
                </b>
            </p>
        </div>
    );
}