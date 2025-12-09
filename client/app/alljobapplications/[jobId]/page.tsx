"use client";

import AllJobApplicationsCard from "@/components/card/alljobapplications";
import ApplicationFilter from "@/components/filter/applicationfilter";
import { Availability, Experience, PreferredLocation, SalaryExcepted } from "@/constants/applicationFilterContest";
import { JobApplication } from "@/interfaces/applicationInterface";
import { useState } from "react";

const applications: JobApplication[] = [
    {
        _id:"1",
        jobId:"2",
        userId:"2",
        snapShot:{
            lookingFor:"role2"
        },
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
    {
        _id:"2",
        jobId:"1",
        userId:"2",
        snapShot:{
            lookingFor:"role1"
        },
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
    {
        _id:"3",
        jobId:"1",
        userId:"1",
        snapShot:{
            lookingFor:"role1"
        },
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
]

export default function AllApplications(){

    const [applicationFilter, setApplicationFilter] = useState({
        salaryExcepted: SalaryExcepted.ThreeToFive,
        preferredLocation: PreferredLocation.allOfTheAbove,
        availability: Availability.immediate,
        experience: Experience.zeroToTwo,
        projectCheck: false,
        experienceCheck: false
    });

    const handleOnChange = (key: string, value: string)=>{
        setApplicationFilter({...applicationFilter, [key]: value});
    }

    const handleOnClick = ()=>{
        console.log("filter button is clicked with data! ", applicationFilter);
    }

    return(
        <div className="space-y-3.5 py-5 bg-base-300 min-h-screen ">
            <div className="flex flex-col gap-6 w-full mx-auto lg:max-w-[1200px] p-2">
                <h1 className="font-bold text-lg text-center">AllApplications</h1>
                <div className="flex flex-wrap gap-6 w-full">
                    <div className="w-full lg:w-[30%] py-4 px-4 lg:sticky lg:top-4 h-fit">
                        <ApplicationFilter 
                        applicationFilter={applicationFilter} 
                        onChange={handleOnChange} 
                        onClick={handleOnClick} />
                    </div>
                    <div className="w-full lg:w-[60%] py-4">
                        <AllJobApplicationsCard applications={applications}/>
                    </div>
                </div>
            </div>
        </div>
    )
}