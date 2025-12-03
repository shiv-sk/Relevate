"use client";
import NewJob from "@/components/forms/newJob";
import { Job as JobInterface, JobLevel, JobLocation, JobType } from "@/interfaces/jobInterface";
import { useState } from "react";

export default function Job(){

    const [job, setJob] = useState<JobInterface>({
        title:"",
        description:"",
        salary:"",
        requiredSkills:[],
        level: JobLevel.Associate,
        type: JobType.Contract,
        location: JobLocation.Onsite
    })

    const [skill, setSkill] = useState("");

    const handleOnChange = (key: string, val: string)=>{
        if(key === "skill"){
            setSkill(val);
        }
        setJob({...job, [key]: val});
    }

    const handleAddSkill = ()=>{
        if(!skill.trim()){
            alert("empty values are not allowed");
            return;
        }
        const duplicateSkill = job.requiredSkills.some((s)=>(s === skill));
        if(duplicateSkill){
            alert("skill is already added");
            return;
        }
        setJob({...job, requiredSkills: [...job.requiredSkills, skill]});
        setSkill("");
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(
            !job.title.trim() || 
            !job.description.trim() || 
            !job.level.trim() || 
            !job.location.trim() || 
            !job.salary.trim() ||
            !job.type.trim() ||
            job.requiredSkills.length === 0
        ){
            alert("empty fields are not allowed");
            return;
        }
        console.log("the new job data is!", job);
    }

    return(
        <div className="min-h-screen bg-base-300 py-6">
            <div>
                <NewJob 
                job={job}
                skill={skill} 
                handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit} 
                handleAddSkill={handleAddSkill}/>
            </div>
        </div>
    )
}