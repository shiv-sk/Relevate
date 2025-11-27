"use client";
import { JobLevel, JobLocation, JobType } from "@/interfaces/jobInterface";
import BaseSelect from "../forms/baseSelect";
import BaseSidebar from "./baseSidebar";
import { useState } from "react";
import BaseButton from "../forms/baseButton";
import H3 from "../headers/h3";

export default function Filter(){

    const [filters, setFilters] = useState({
        JobType:"",
        JobLevel:"",
        JobLocation:""
    });

    const handleOnChange = (val: string, field: string)=>{
        setFilters({...filters, [field]: val});
    }

    return(
        <BaseSidebar>
            <div className="p-4 flex flex-col gap-4 w-full">
                <H3 title={"Filter"} className="text-center"/>
                <hr className="h-px bg-neutral-quaternary border-2"/>

                <BaseSelect 
                option={[JobType.Contract, JobType.FullTime, JobType.Internship, JobType.PartTime]} 
                label={"JobType"}
                value={filters.JobType}
                onChange={(val)=>handleOnChange(val, "JobType")} />

                <BaseSelect 
                option={[JobLocation.Onsite, JobLocation.Remote]} 
                label={"JobLocation"}
                value={filters.JobLocation}
                onChange={(val)=>handleOnChange(val, "JobLocation")} />

                <BaseSelect 
                option={[JobLevel.Associate, JobLevel.Entry, JobLevel.Intern, JobLevel.Senior]} 
                label={"JobLevel"}
                value={filters.JobLevel}
                onChange={(val)=>handleOnChange(val, "JobLevel")} />

                <BaseButton type={"button"} text={"Filter"} className="btn btn-primary"/>

            </div>
        </BaseSidebar>
    )
}