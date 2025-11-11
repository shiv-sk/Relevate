"use client";
import JobDetailBaseCard from "./jobdetailbasecard";

export default function JobDetail({job}){
    return(
        <JobDetailBaseCard>
        <div 
        className="flex flex-col gap-2 bg-base-300 space-x-2 justify-center items-center 
        my-10 shadow-2xl rounded-lg w-full space-y-4 py-4 px-4">
            <h3>job-title:{job.title}</h3>
            <h3>posted-by:{job.companyId.name}</h3>
            <div className="flex gap-2 space-x-2 justify-center items-center">
                <p className="text-sm mt-2">{job.location}</p>
                <p className="text-sm mt-2">{job.salary}</p>
                <p className="text-sm mt-2">{job.type}</p>
                <p className="text-sm mt-2">{job.level}</p>
            </div>
            <div className="flex gap-4">
                {
                    job.requiredSkills.map((skill)=>(
                        <div key={skill} className="flex flex-row gap-2 space-x-2 justify-center items-center">
                            <span className="text-sm mt-2">{skill}</span>
                        </div>
                    ))
                }
            </div>
            <div>
                <h3 className="font-bold text-lg">Description</h3>
                <p className="text-lg">
                    {job.description}
                </p>
            </div>
            <div>
                <h3 className="font-bold text-lg">AboutCompany</h3>
                <p className="text-lg">
                    {job.companyId.description}
                </p>
                <div className="flex gap-4">
                    {
                        job.companyId.socialMedia.map((socilaMedia)=>(
                            <div key={socilaMedia.name} className="flex flex-row gap-2 space-x-2 justify-center items-center">
                                <span className="text-sm mt-2 font-bold">{socilaMedia.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </JobDetailBaseCard>
    )
}