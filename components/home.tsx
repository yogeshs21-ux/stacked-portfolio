"use client"

import { BLUR_DELAY, DATA } from "@/resume-data/data";
import BlurFade from "./blur-fade";
import { Badge } from "./ui/badge";

function Home() {
    return (
        <main className="flex flex-col justify-center h-[80%]">
    
            <section>
                <div className="mx-auto w-full  space-y-8 mb-2">
                    <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <h1 className="relative text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Hi, I'm {DATA.personalData.name}
                        </h1>
                        <BlurFade delay={BLUR_DELAY}>
                        <div className="max-w-[600px] prose text-pretty font-sans text-lg dark:prose-invert">
                            {DATA.personalData.description}
                        </div>
                        </BlurFade>
                    </div>
                
                    </div>
                </div>
            </section>
    
            <section>
                <div className="flex min-h-0 flex-col gap-y-3 ">
                    <BlurFade delay={BLUR_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                    {DATA.personalData.skill.map((skill, id) => (
                        <BlurFade key={skill} delay={BLUR_DELAY * 10 + id * 0.05}>
                        <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                    </div>
                </div>
    
            </section>
            
        </main>
    );
}

export default Home
  
  