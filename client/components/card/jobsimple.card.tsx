"use client";
import Link from "next/link";
import BaseButton from "../forms/baseButton";
import SimpleJobCrad from "./simplejobcard";
import { Job } from "@/interfaces/jobInterface";

export default function JobCardSimple({jobs}: {jobs: Job[]}){
    return(
        <div className="w-full flex flex-col gap-6 items-center">
        {
            jobs.map((j)=>(
                <SimpleJobCrad key={j._id}>
                    <div>
                        <h2 className="card-title">{j.title}</h2>
                        <div className="flex gap-2 space-x-2 justify-center items-center">
                            <p className="text-sm mt-2">{j.location}</p>
                            <p className="text-sm mt-2">{j.salary}</p>
                            <p className="text-sm mt-2">{j.type}</p>
                            <p className="text-sm mt-2">{j.level}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link href={`/aboutjob/${j._id}`}>
                                <BaseButton 
                                type={"button"} 
                                text={"more"} 
                                className="btn btn-primary"/>
                            </Link>
                        </div>
                    </div>
                </SimpleJobCrad>
            ))
        }
        </div>
    )
}