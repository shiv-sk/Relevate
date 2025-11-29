"use client";
import Level from "../icons/level";
import Location from "../icons/location";
import Salary from "../icons/salary";
import Type from "../icons/type";
import JobDetailBaseCard from "./jobdetailbasecard";

export default function JobDetail({job}){
    return(
        <JobDetailBaseCard>
        <div 
        className="flex flex-col gap-2 space-x-2 justify-center w-full py-4 px-4">
            <h3 className="font-bold text-2xl">{job.title}</h3>
            <h3 className="font-semibold text-lg">{job.companyId.name}</h3>
            <div className="flex gap-2 space-x-2 justify-center items-center py-2 px-2">
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Salary/>
                    <p>{job.salary}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Location/>
                    <p>{job.location}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Type/>
                    <p>{job.type}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Level/>
                    <p>{job.level}</p>
                </div>
            </div>
            <hr className="bg-gray-500" />
            <div className="flex flex-col py-4">
                <h3 className="text-lg font-semibold">Required skills</h3>
                <div className="flex gap-2">
                    {
                        job.requiredSkills.map((skill)=>(
                            <div key={skill} className="flex flex-row gap-2 space-x-2 justify-center items-center">
                                <span className="text-lg mt-2 badge badge-neutral">{skill}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="py-4 px-2">
                <h3 className="font-bold text-lg">Description</h3>
                <p className="text-lg">
                    {job.description}
                </p>
            </div>
            <div className="py-4 px-2">
                <h3 className="font-bold text-lg">AboutCompany</h3>
                <p className="text-lg">
                    {job.companyId.description}
                </p>
                <div className="flex gap-4 py-0.5">
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