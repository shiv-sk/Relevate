"use client";

import JobCardSimple from "@/components/card/jobsimple.card";
import SearchBar from "@/components/searchbar/search";
import Filter from "@/components/sidebar/filter";
import { Job, JobLevel, JobLocation, JobType } from "@/interfaces/jobInterface";
import { useState } from "react";

const jobs: Job[] = [
    {
        _id: "1",
        title: "job1",
        requiredSkills: [],
        level: JobLevel.Intern,
        type: JobType.Internship,
        location: JobLocation.Onsite,
        salary: "7 - 9 LPA",
        description:""
    },
    {
        _id: "2",
        title: "job1",
        requiredSkills: [],
        level: JobLevel.Intern,
        type: JobType.Internship,
        location: JobLocation.Onsite,
        salary: "7 - 9 LPA",
        description:""
    },
    {
        _id: "3",
        title: "job1",
        requiredSkills: [],
        level: JobLevel.Intern,
        type: JobType.Internship,
        location: JobLocation.Onsite,
        salary: "8 - 8.5 LPA",
        description:""
    },
    {
        _id: "4",
        title: "job1",
        requiredSkills: [],
        level: JobLevel.Intern,
        type: JobType.Internship,
        location: JobLocation.Onsite,
        salary: "3 - 4.5 LPA",
        description:""
    },
    {
        _id: "5",
        title: "job1",
        requiredSkills: [],
        level: JobLevel.Intern,
        type: JobType.Internship,
        location: JobLocation.Onsite,
        salary: "3 - 5 LPA",
        description:""
    },
]

export default function CompanyJobs(){

    const [search, setSearch] = useState("");

    const handleOnSearchChange = (val: string)=>{
        setSearch(val);
    }

    const handleSearchOnClick = ()=>{
        if(!search.trim()){
            alert("enter atleast three characters to search");
            return;
        }
        console.log("the serach is!", search);
    }

    return(
        <div className="space-y-3.5 py-5 bg-base-300 min-h-screen ">
            <div className="flex flex-col gap-6 w-full mx-auto lg:max-w-[1200px]">
                <div className="w-full max-w-[600px] mx-auto">
                    <SearchBar 
                    value={search} 
                    onSearchChange={handleOnSearchChange} 
                    handleSearchOnClick={handleSearchOnClick}/>
                </div>
                <div className="flex flex-wrap gap-6 w-full">
                    <div className="w-full lg:w-[30%] py-4 px-4 lg:sticky lg:top-4 h-fit">
                        <Filter />
                    </div>
                    <div className="w-full lg:w-[60%] py-4">
                        <JobCardSimple jobs={jobs}></JobCardSimple>
                    </div>
                </div>
            </div> 
        </div>
    )
}