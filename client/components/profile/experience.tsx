"use client";

import { Experience as ExperienceInterface } from "@/interfaces/profileInterface";

export default function Experience({experience}: {experience: ExperienceInterface[]}){
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">Experience</h3>
            <div className="space-y-3">
                {
                    experience.length > 0 ? (
                        experience.map((exp, index)=>(
                            <div key={index}>
                                <p className="font-semibold text-lg">Company: {exp.company}</p>
                                <p>role: {exp.role}</p>
                                <p>role: {exp.years}</p>
                                <p>noticePeriod: {exp.noticePeriod ?? 0}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No Experience!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}