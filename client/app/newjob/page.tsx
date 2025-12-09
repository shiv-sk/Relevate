"use client";

import NewJobForm from "@/components/forms/newJob";
import { JobLevel, JobLocation, JobType } from "@/constants/jobcontest";
import { Job } from "@/interfaces/jobInterface";
import { useState } from "react";

export default function NewJob(){

    const [job, setJob] = useState<Job>({
        title:"",
        description:"",
        requiredSkills:[],
        type:JobType.FullTime,
        level:JobLevel.Entry,
        location:JobLocation.Onsite,
        salary:""
    });
    const [skill, setSkill] = useState("");

    const handleOnChange = (key: string, value: string)=>{
        if(key === "skill"){
            setSkill(value);
        }
        setJob({...job, [key]: value});
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log("the jobData is! ", job);
    }

    const handleAddSkill = ()=>{
        if(!skill.trim()){
            alert("add skill!");
            return;
        }
        const duplicateSkill = job.requiredSkills.some((sk)=>(sk === skill));
        if(duplicateSkill){
            alert("duplicate skills are not allowed!");
            return;
        }
        setJob({...job, requiredSkills: [...job.requiredSkills, skill]});
        setSkill("");
    }
    return(
        <div className="min-h-screen gap-4 py-5 bg-base-300">
            <div className="max-w-sm mx-auto">
                <NewJobForm 
                job={job} 
                skill={skill} 
                handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit} 
                handleAddSkill={handleAddSkill} />
            </div>
        </div>
    )
}