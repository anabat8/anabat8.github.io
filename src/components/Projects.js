import React, { Children } from 'react';
import { Carousel } from 'flowbite-react';
import Connect4Pic from "../images/Connect4.jpg"
import QuizzzzPic from "../images/Quizzzz.jpg"
import toDoListPic from "../images/toDoList.jpg"
import rayTracerPic from "../images/rayTracer.jpg"
import CarouselCaption from './CarouselCaption';
import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import {ReactComponent as RPIcon} from '../images/hf-logo.svg'

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
      base: "max-w-sm h-auto my-5 md:my-10 flex rounded-lg border border-opacity-40 border-transparent border-2 bg-white bg-opacity-50 shadow-md animate-easeInTransition hover:scale-110 duration-150",
      children: "flex h-full flex-col justify-start gap-3 p-6",
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
              <Carousel pauseOnHover theme={customTheme} className='group'>
                <div className="relative flex justify-center items-center">
                  <img className="animate-easeInTransition group-hover:blur-2xl duration-200" src={Connect4Pic} alt="Connect 4 JS game"/>
                  <CarouselCaption
                    title="Connect 4"
                    subtitle="a variant of the classical game"
                    technologies="JS, Node.js"
                    link="https://github.com/tdrAndrei/Connect4"
                  />
                </div>
                <div className="group relative flex justify-center items-center">
                  <img className="animate-easeInTransition group-hover:blur-xl duration-200" src={QuizzzzPic} alt="Quizzzz! Java multiplayer game" />
                  <CarouselCaption
                    title="Quizzzz!"
                    subtitle="multiplayer game tackling energy consumption"
                    technologies="Java, Spring Boot"
                    link=""
                  />
                </div>
                <div className="group relative flex justify-center items-center">
                  <img className="animate-easeInTransition group-hover:blur-xl duration-200" src={toDoListPic} alt="To do list app" />
                  <CarouselCaption
                    title="To Do List"
                    subtitle="an app to organise your daily activities"
                    technologies="Spring Boot & Security, React.js"
                    link="https://github.com/anabat8/to-do-app"
                  />
                </div>
                <div className="group relative flex justify-center items-center">
                  <img className="animate-easeInTransition group-hover:blur-xl duration-200" src={rayTracerPic} alt="Ray Tracer" />
                  <CarouselCaption
                    title="Ray Tracer"
                    subtitle=""
                    technologies="C++, OpenGL"
                    link=""
                  />
                </div>
              </Carousel>
            </div>
            <div className="grid grid-row-3 justify-items-center lg:gap-y-1 lg:grid-cols-3 lg:gap-x-8">
            <Card theme={customCardTheme}>
                <div className="flex items-center space-x-2">
                  <h5 className="text-lg md:text-2xl font-bold tracking-tight text-navy font-poppins flex items-center">
                    Research project
                    <RPIcon className="h-9 w-9 text-navy ml-2" /> 
                  </h5>
                </div>
                <p className="font-normal text-navy font-poppins">
                  Investigated whether Inverse Reinforcement Learning can complement Reinforcement Learning from Human Feedback for query reduction.
                  <br></br>
                  <a className="text-navy font-semibold" href="https://repository.tudelft.nl/record/uuid:a17dc948-dbbf-4b1d-84df-8fde8c2fadde" target="_blank" rel="noopener noreferrer">
                    Link to thesis
                  </a>
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">Python</Badge>
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">Reinforcement Learning</Badge>
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">Gymnasium</Badge>
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">TensorBoard</Badge>
                </div>
              </Card>
              <Card theme={customCardTheme}>
                <h5 className="text-lg md:text-2xl font-bold tracking-tight text-navy font-poppins">
                  Grocery robot 🤖 
                </h5>
                <p className="font-normal text-navy font-poppins">
                  Designed a self-sufficient grocery robot using an Artificial Neural Network, Genetic Algorithms, Swarm Intelligence (Ant Colony Optimization Algorithm) for pathfinding, and Reinforcement Learning for optimization.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">Python</Badge>
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">Machine Learning</Badge>
                  <Badge className="animate-easeInTransition bg-gradient-card" size="sm">NP-Hard</Badge>
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
                <div className="mt-auto flex">
                  <Badge className="animate-easeInTransition" color="pink" size="sm">Scala</Badge>
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
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge className="animate-easeInTransition" color="purple" size="sm">Java</Badge>
                  <Badge className="animate-easeInTransition" color="purple" size="sm">Spring Boot</Badge>
                  <Badge className="animate-easeInTransition" color="purple" size="sm">Spring Security</Badge>
                </div>
              </Card>
              <Card theme={customCardTheme}>
                <h5 className="text-lg md:text-2xl font-bold tracking-tight text-navy font-poppins">
                  JSON processor
                </h5>
                <p className="font-normal text-navy font-poppins">
                  Implemented a clone of
                  <a href="https://jqlang.github.io/jq/" target="_blank" rel="noopener noreferrer" className="ml-1">
                  jq
                  </a>
                  , a lightweight and flexible command-line JSON processor, in Haskell. 
                  <br></br>
                  Some notable features were: parse, interpret and pretty-print valid JSONs, implement basic filters and try-catch expressions.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Badge className="animate-easeInTransition" color="purple" size="sm">Haskell</Badge>
                  <Badge className="animate-easeInTransition" color="purple" size="sm">Functional programming</Badge>
                  <Badge className="animate-easeInTransition" color="purple" size="sm"></Badge>
                </div>
              </Card>
            </div>
        </div>
    );
}