"use client"
import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import { useOutsideClick } from "@/hook/use-outside-click";
import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import { CircleCheckBig, CircleX, MoveRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


interface Project {
  name: string
  title: string
  results: { title: string }[]
  link: string
  code: string | null
  image: string
  tools: string[]
  role: string
  content: () => ReactNode
}

const Project=()=>{

  return(
    <section className="">
      <BlurFade delay={BLUR_DELAY * 2} className="mt-4">
        <div className="text-center md:text-start">
          <h2 className="text-6xl font-bold mb-5 inline-flex items-center ">
            Project
            <div className="relative">
              <span className="absolute top-2 size-3 bg-emerald-400 rounded-full" />
            </div>
          </h2>
        </div>
      </BlurFade>

      <div className="flex flex-col md:mt-6 gap-10 font-sans">
        {DATA.projectData.map((project,index)=>(
          <div 
            key={project.title} 
            style={{top:`calc(37px + ${index*30}px)`}}
            className="bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-4 after:pointer-events-none md:pt-10 md:px-6 lg:pt-12 lg:px-12 relative md:sticky ">
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 sticky top-9">
              <div className="lg:pb-16">
                <div>
                  <div className="md:inline-flex  gap-2 items-center tracking-widest text-sm lg:text-md text-transparent bg-clip-text">
                    <span className="md:font-bold uppercase ">{project.name}</span>
                  </div>
                </div>
                <h3 className="text-xl mt-2 md:mt-5 text-primary md:text-3xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result)=>(
                    <li key={result.title} className="font-sans flex gap-2 items-center text-xs md:text-base text-white/80">
                      <CircleCheckBig className="size-3"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.map((tool,index)=>{
                    return(
                      <span key={index} className="bg-primary/20 text-white px-3 py-1 rounded-full text-xs ">{tool}</span>
                    )
                })}
                </div>
                <div className="flex gap-2">
                  {project.link &&
                  <a href={project.link} target="_blank">
                    <Button className="group mt-8 h-10 " asChild>
                      <span className="flex gap-2 items-center text-sm mt-1">Demo <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                    </Button>
                  </a>}
                  {project.code &&
                  <a href={project.code} target="_blank">
                    <Button className="group mt-8 h-10" asChild>
                      <span className="flex gap-2 items-center text-sm mt-1">Code <MoveRight className="h-4 w-4 -rotate-45 group-hover:rotate-0"/> </span>
                    </Button>
                  </a>}
                </div>
              </div>
              <div className="lg:relative">
                <img className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project