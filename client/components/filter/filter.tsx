import { JobLevel, JobLocation, JobType } from "@/interfaces/jobInterface";
import BaseSelect from "../forms/baseSelect";

export default function Filter(){
    return(
        <div className="
                flex flex-col md:flex-row md:flex-wrap md:items-end 
                bg-base-200 shadow-xl 
                py-4 px-4 rounded-lg 
                gap-4 sm:gap-6 
                justify-center items-center
                
            ">
                <div className="w-full md:w-[30%]">
                    <BaseSelect 
                    option={[JobLevel.Intern, JobLevel.Associate, JobLevel.Entry, JobLevel.Senior]} 
                    label={"JobLevel"}/>
                </div>

                <div className="w-full md:w-[30%]">
                    <BaseSelect 
                    option={[JobType.Contract, JobType.FullTime, JobType.Internship, JobType.PartTime]} 
                    label={"JobType"}/>
                </div>

                <div className="w-full md:w-[30%]">
                    <BaseSelect 
                    option={[JobLocation.Onsite, JobLocation.Remote]} 
                    label={"JobLocation"}/>
                </div>
        </div>
    )
}