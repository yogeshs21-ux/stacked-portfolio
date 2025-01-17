"use client"
import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";


const Project=()=>{
    return(
      <section>
      <BlurFade delay={BLUR_DELAY * 2} className="mt-4">
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      
    </section>
    )
}

export default Project