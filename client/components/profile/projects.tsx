import Link from "next/link"

export default function Projects(){
    const projects = [
        {
            "name":"projectName1",
            "description":"project-Description",
            links:{
                "github":"github.com",
                "live":"live.com",
                "demo":"demo.com",
                "article":"article.com",
            }
        },
        {
            "name":"projectName2",
            "description":"project-Description",
            links:{
                "github":"github.com",
                "live":"live.com",
                "demo":"demo.com",
                "article":"article.com",
            }
        },
        {
            "name":"projectName3",
            "description":"project-Description",
            links:{
                "github":"github.com",
                "live":"live.com",
                "demo":"demo.com",
                "article":"article.com",
            }
        },
    ]
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">Projects</h3>
            <div>
                {
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
                                        <Link href={project.links.github}>GitHub</Link>
                                    </span>
                                    <span className="font-semibold">
                                        <Link href={project.links.live}>Live</Link>
                                    </span>
                                    <span className="font-semibold">
                                        <Link href={project.links.demo}>Demo</Link>
                                    </span>
                                    <span className="font-semibold">
                                        <Link href={project.links.article}>Article</Link>
                                    </span> 
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}