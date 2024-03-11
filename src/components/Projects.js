import React, { Children } from 'react';
import { Carousel } from 'flowbite-react';
import Connect4Pic from "../images/Connect4.jpg"
import QuizzzzPic from "../images/Quizzzz.jpg"
import toDoListPic from "../images/toDoList.jpg"
import rayTracerPic from "../images/rayTracer.jpg"
import CarouselCaption from './CarouselCaption';
import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react';

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

const customCardTheme = {
    root: {
      base: "max-w-sm h-auto my-5 md:my-10 flex rounded-lg border border-opacity-40 border-transparent border-2 bg-white bg-opacity-50 shadow-md transition ease-in-out duration-100 hover:scale-110",
      children: "flex h-full flex-col justify-center gap-3 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row"
      }, 
      href: "hover:bg-gray-100"
    }, 
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
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
            <div className="md:h-72 lg:h-96 xl:h-[33rem] hidden md:block ">
              <Carousel pauseOnHover theme={customTheme}>
                <div className="group relative flex justify-center items-center">
                  <img className="transition ease-in-out duration-100 group-hover:blur-2xl" src={Connect4Pic} alt="Connect 4 JS game"/>
                  <CarouselCaption
                    title="Connect 4"
                    subtitle="a variant of the classical game"
                    technologies="JS, Node.js"
                    link="https://github.com/tdrAndrei/Connect4"
                  />
                </div>
                <div className="group relative flex justify-center items-center">
                  <img className="transition ease-in-out duration-100 group-hover:blur-xl" src={QuizzzzPic} alt="Quizzzz! Java multiplayer game" />
                  <CarouselCaption
                    title="Quizzzz!"
                    subtitle="multiplayer game tackling energy consumption"
                    technologies="Java, Spring Boot"
                    link=""
                  />
                </div>
                <div className="group relative flex justify-center items-center">
                  <img className="transition ease-in-out duration-100 group-hover:blur-xl" src={toDoListPic} alt="To do list app" />
                  <CarouselCaption
                    title="To Do List"
                    subtitle="an app to organise your daily activities"
                    technologies="Spring Boot & Security, React.js"
                    link="https://github.com/anabat8/to-do-app"
                  />
                </div>
                <div className="group relative flex justify-center items-center">
                  <img className="transition ease-in-out duration-100 group-hover:blur-xl" src={rayTracerPic} alt="Ray Tracer" />
                  <CarouselCaption
                    title="Ray Tracer"
                    subtitle=""
                    technologies="C++, OpenGL"
                    link=""
                  />
                </div>
              </Carousel>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <Card theme={customCardTheme}>
                <h5 className="text-lg md:text-2xl font-bold tracking-tight text-navy font-poppins">
                  Grocery robot 🤖 
                </h5>
                <p className="font-normal text-navy font-poppins">
                  Designed a self-sufficient grocery robot using an Artificial Neural Network, Genetic Algorithms, Swarm Intelligence (Ant Colony Optimization Algorithm) for pathfinding, and Reinforcement Learning for optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="animate-easeInAndScale bg-gradient-card" size="sm">Python</Badge>
                  <Badge className="animate-easeInAndScale bg-gradient-card" size="sm">Machine Learning</Badge>
                  <Badge className="animate-easeInAndScale bg-gradient-card" size="sm">NP-Hard</Badge>
                </div>
              </Card>
              <Card theme={customCardTheme}>
                <h5 className="text-lg md:text-2xl font-bold tracking-tight text-navy font-poppins">
                  Paret Language Interpreter
                </h5>
                <p className="font-normal text-navy font-poppins">
                  Implemented a parser, desugarer and interpreter for a toy language called Paret.
                  <br></br>
                  Some notable functionalities of Paret were: type checking, lazy evaluation, mutation and state. 
                </p>
                <div className="flex items-center justify-center">
                  <Badge className="animate-easeInAndScale" color="pink" size="sm">Scala</Badge>
                </div>
              </Card>
              <Card theme={customCardTheme}>
                <h5 className="text-lg md:text-2xl font-bold tracking-tight text-navy font-poppins">
                  Scheduling System 📅
                </h5>
                <p className="font-normal text-navy font-poppins">
                  Collaboratively developed the backend of an application using a microservices architecture and domain driven design.
                  The system allows authenticated users to request and schedule processor time from a supercomputer.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="animate-easeInAndScale" color="purple" size="sm">Java</Badge>
                  <Badge className="animate-easeInAndScale" color="purple" size="sm">Spring Boot</Badge>
                  <Badge className="animate-easeInAndScale" color="purple" size="sm">Spring Security</Badge>
                </div>
              </Card>
            </div>
        </div>
    );
}