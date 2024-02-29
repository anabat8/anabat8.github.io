import React from 'react';
import { Carousel } from 'flowbite-react';
import Connect4Pic from "../images/Connect4.jpg"
import QuizzzzPic from "../images/Quizzzz.jpg"
import toDoListPic from "../images/toDoList.png"
import CarouselCaption from './CarouselCaption';

const customTheme = {
    root: {
        base: "relative h-full w-full rounded-lg shadow-md",
        leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
        rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
      },
      indicators: {
        active: {
          off: "bg-gray-800/50 hover:bg-navy",
          on: "bg-navy",
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
      },
      item: {
        base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        wrapper: {
          off: "w-full flex-shrink-0 transform cursor-default snap-center",
          on: "w-full flex-shrink-0 transform cursor-grab snap-center",
        },
      },
      control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/50 group-hover:bg-navy group-focus:outline-none sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-white sm:h-6 sm:w-6",
      },
      scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg shadow-md",
        snap: "snap-x",
      },
    };

export default function Projects() {
    return (
        <div class="md:container md:mx-auto">
            <div className="flex items-center">
                <h1 className="lg:text-4xl md:text-2xl text-xl font-poppins text-black font-semibold drop-shadow">
                    projects
                </h1>
                <hr className="w-28 md:w-48 h-1 my-4 mx-4 bg-pinkStandard border-0 rounded md:my-10" />
            </div>
            <div className="h-32 md:h-96">
              <Carousel pauseOnHover theme={customTheme}>
                <div className="relative flex justify-center items-center">
                  <img className="opacity-50" src={Connect4Pic} alt="Connect 4 JS game"/>
                  <CarouselCaption
                    title="Connect 4"
                    subtitle="a variant of the classical game"
                    technologies="JS, Node.js"
                    link="https://github.com/tdrAndrei/Connect4"
                  />
                </div>
                <div className="relative flex justify-center items-center">
                  <img className="opacity-50" src={QuizzzzPic} alt="Quizzzz! Java multiplayer game" />
                    <CarouselCaption
                        title="Quizzzz!"
                        subtitle="multiplayer game tackling energy consumption"
                        technologies="Java, Spring Boot"
                        link=""
                    />
                </div>
                <div className="relative flex justify-center items-center">
                  <img className="opacity-60" src={toDoListPic} alt="To do list app" />
                    <CarouselCaption
                        title="To Do List"
                        subtitle="an app to organise your daily activities"
                        technologies="Spring Boot & Security, React.js"
                        link="https://github.com/anabat8/to-do-app"
                    />
                </div>
              </Carousel>
            </div>
        </div>
    );
}