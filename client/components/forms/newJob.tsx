"use client";
import { JobLevel, JobLocation, JobType } from "@/interfaces/jobInterface";
import H1 from "../headers/h1";
import BaseInput from "./baseInput";
import BaseSelect from "./baseSelect";
import Textarea from "./textarea";
import BaseButton from "./baseButton";

export default function NewJob(){
    return(
        <div 
        className="bg-base-100 flex flex-col justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto">
            <form action="" className="gap-2.5 py-6 space-y-3 w-full">
                <H1 heading={"AddJob"}/>

                <BaseInput 
                type={"text"} 
                onChange={undefined} 
                value={""}
                label="Title" />

                <Textarea 
                value={""} 
                onChange={undefined} 
                placeholder={""} 
                label="Description"/>

                <BaseInput 
                type={"text"} 
                onChange={undefined} 
                value={""}
                label="Salary" />
                
                <div className="space-y-2">
                    <BaseInput 
                    type={"text"} 
                    onChange={undefined} 
                    value={""}
                    label="Required-Skill" />
                    <BaseButton type={"submit"} text={"Add"} className="btn btn-secondary"/>
                </div>

                <BaseSelect 
                option={[JobType.Contract, JobType.FullTime, JobType.Internship, JobType.PartTime]} 
                label={"JobType"} 
                value={""} />

                <BaseSelect 
                option={[JobLevel.Associate, JobLevel.Entry, JobLevel.Intern, JobLevel.Senior]} 
                label={"JobLevel"} 
                value={""}
                />

                <BaseSelect 
                option={[JobLocation.Onsite, JobLocation.Remote]} 
                label={"JobLocation"} 
                value={""} />

                <BaseButton 
                type={"submit"} 
                text={"NewJob"} 
                className="btn btn-primary w-full"/>
            </form>
        </div>
    )
}