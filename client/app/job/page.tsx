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

    const handleOnChange = (val: string, key: string)=>{
        if(key === "skill"){
            setSkill(val);
        }
        setJob({...job, [key]: val});
    }

    const handleSelectOnChange = ()=>{}

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

    return(
        <div className="min-h-screen bg-base-300 py-6">
            <div>
                <NewJob/>
            </div>
        </div>
    )
}