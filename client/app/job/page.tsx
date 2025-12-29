"use client";
import { baseUrl, postAndPatchReq } from "@/apicalls/apiCalls";
import NewJob from "@/components/forms/newJob";
import { useAuth } from "@/context/authcontext";
import { Job as JobInterface, JobLevel, JobLocation, JobType } from "@/interfaces/jobInterface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Job(){
    const {user, isLoading: authLoading} = useAuth();
    const router = useRouter();
    
    useEffect(()=>{
        if(!authLoading && !user){
            router.push("/login");
        }
    }, [user, authLoading, router]);

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
    const [isLoading, setIsLoading] = useState(false);

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

    const removeSkill = (index: number)=>{
        setJob((prev)=>(
            {
                ...prev,
                requiredSkills: prev.requiredSkills.filter((_, i) => i !== index),
            }
        ))
    }

    const handleOnSubmit = async (e)=>{
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
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/job`, "POST", job);
            if(response){
                router.push("/jobs");
            }
        } catch (error) {
            console.log("error from new job page! ", error);
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <div className="min-h-screen bg-base-300 py-6">
            <div>
                <NewJob
                job={job}
                skill={skill} 
                handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit} 
                handleAddSkill={handleAddSkill}
                isLoading={isLoading}
                removeSkill={removeSkill}/>
            </div>
        </div>
    )
}