"use client";

import { Education as EducationInterface } from "@/interfaces/profileInterface";

export default function Education({education}: {education: EducationInterface[]}){
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">Education</h3>
            <div className="space-y-3">
                {
                    education.length > 0 ? (
                        education.map((edu, index)=>(
                            <div key={index}>
                                <p>Institute: {edu.institute}</p>
                                <p>Degree: {edu.degree} <span>({edu.passoutYear})</span></p>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No Education!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}