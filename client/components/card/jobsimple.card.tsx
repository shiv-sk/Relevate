"use client";
import BaseButton from "../forms/baseButton";
import SimpleJobCrad from "./simplejobcard";

export default function JobCardSimple({jobs}){
    return(
        <div className="w-full flex flex-col gap-6 items-center">
        {
            jobs.map((j)=>(
                <SimpleJobCrad key={j.id}>
                    <div>
                        <h2 className="card-title">{j.title}</h2>
                        <div className="flex gap-2 space-x-2 justify-center items-center">
                            <p className="text-sm mt-2">{j.location}</p>
                            <p className="text-sm mt-2">{j.salary}</p>
                            <p className="text-sm mt-2">{j.type}</p>
                            <p className="text-sm mt-2">{j.level}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <BaseButton 
                            type={"button"} 
                            text={"more"} 
                            className="btn btn-primary"/>
                        </div>
                    </div>
                </SimpleJobCrad>
            ))
        }
        </div>
    )
}