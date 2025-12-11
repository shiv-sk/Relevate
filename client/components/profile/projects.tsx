"use client";

import { Projects as ProjectsInterface } from "@/interfaces/profileInterface";

export default function Projects({projects}: {projects: ProjectsInterface[]}){
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">Projects</h3>
            <div>
                {
                    projects.length > 0 ? (
                        projects.map((project, index)=>(
                            <div key={index}>
                               <h5 className="font-semibold text-lg">Projectname: 
                                    &nbsp;<span className="font-normal">{project.name}</span>
                                </h5> 
                                <p className="font-semibold text-lg">description: 
                                    &nbsp;<span className="font-normal">{project.description}</span>
                                </p>
                                <div>
                                    <h5 className="font-semibold text-lg">Links</h5>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="font-semibold">
                                            <a target="_blank" href={project.links?.github}>GitHub</a>
                                        </span>
                                        <span className="font-semibold">
                                            <a target="_blank" href={project.links?.live}>Live</a>
                                        </span>
                                        <span className="font-semibold">
                                            <a target="_blank" href={project.links?.demo}>Demo</a>
                                        </span>
                                        <span className="font-semibold">
                                            <a target="_blank" href={project.links?.article}>Article</a>
                                        </span> 
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No projects!</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}