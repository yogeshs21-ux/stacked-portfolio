'use client'

import { DATA } from "@/resume-data/data"

function Experience() {
  return (
    <>
    <div className="p-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-10 inline-flex items-center">
          Experience
          <div className="relative">
            <span className="absolute top-2 size-3 bg-emerald-400 rounded-full" />
          </div>
        </h2>

        <div className="space-y-8">
          {DATA.experiences.map((experience, index) => (
            <div key={`${experience.company}-${index}`} className="space-y-4 border p-4 rounded-2xl">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold">{experience.company}</h3>
                    <div className="text-right">
                    <div className="text-xl">
                        {experience.startDate} - {experience.endDate}
                    </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <h4 className="text-xl font-medium text-emerald-400">
                        {experience.role}
                    </h4>
                    <div className="text-xl mt-1">{experience.location}</div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                    {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience

