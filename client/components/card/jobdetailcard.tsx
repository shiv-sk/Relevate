"use client";
import { Availability, Experience, PreferredLocation, SalaryExcepted } from "@/constants/applicationFilterContest";
import BaseButton from "../forms/baseButton";
import BaseSelect from "../forms/baseSelect";
import Level from "../icons/level";
import Location from "../icons/location";
import Salary from "../icons/salary";
import Type from "../icons/type";
import JobDetailBaseCard from "./jobdetailbasecard";

export default function JobDetail({job, confirmRef, onClick, applicationOptions, onChange, handleConfirmClick}){
    return(
        <JobDetailBaseCard>
        <div 
        className="flex flex-col gap-2 space-x-2 justify-center w-full py-4 px-4">
            <h3 className="font-bold text-2xl">{job.title}</h3>
            <h3 className="font-semibold text-lg">{job.companyId.name}</h3>
            <div className="flex gap-2 space-x-2 justify-center items-center py-2 px-2">
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Salary/>
                    <p>{job.salary}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Location/>
                    <p>{job.location}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Type/>
                    <p>{job.type}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-0.5 py-2 px-1">
                    <Level/>
                    <p>{job.level}</p>
                </div>
            </div>
            <hr className="bg-gray-500" />
            <div className="flex flex-col py-4">
                <h3 className="text-lg font-semibold">Required skills</h3>
                <div className="flex gap-2">
                    {
                        job.requiredSkills.map((skill)=>(
                            <div key={skill} className="flex flex-row gap-2 space-x-2 justify-center items-center">
                                <span className="text-lg mt-2 badge badge-neutral">{skill}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="py-4 px-2">
                <h3 className="font-bold text-lg">Description</h3>
                <p className="text-lg">
                    {job.description}
                </p>
            </div>
            <div className="py-4 px-2">
                <h3 className="font-bold text-lg">AboutCompany</h3>
                <p className="text-lg">
                    {job.companyId.description}
                </p>
                <div className="flex gap-4 py-0.5">
                    {
                        job.companyId.socialMedia.map((socilaMedia)=>(
                            <div key={socilaMedia.name} className="flex flex-row gap-2 space-x-2 justify-center items-center">
                                <span className="text-sm mt-2 font-bold">{socilaMedia.name}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="card-actions justify-end">
                    <BaseButton 
                    type={"button"} 
                    text={"Apply"} 
                    className="btn btn-primary"
                    handleOnClick={onClick} />
                    <BaseButton type={"button"} text={"AiReview"} className="btn btn-secondary" />
                </div>
            </div>
        </div>
        <dialog ref={confirmRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Mandatry Fields</h3>
                <p className="py-2">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                    <form method="dialog" className="w-full space-y-2">
                        <BaseSelect 
                        option={[SalaryExcepted.ThreeToFive, SalaryExcepted.FiveToEight, SalaryExcepted.MoreThanEight]} 
                        label={"SalaryExcepted"}
                        value={applicationOptions.salaryExcepted}
                        onChange={(e)=>onChange("salaryExcepted", e.target.value)} />
                                    
                        <BaseSelect 
                        option={
                            [PreferredLocation.onsiteOnly, PreferredLocation.remoteOnly, 
                            PreferredLocation.hybrid, PreferredLocation.allOfTheAbove]
                        } 
                        label={"PreferredLocation"}
                        value={applicationOptions.preferredLocation}
                        onChange={(e)=>onChange("preferredLocation", e.target.value)} />
                                    
                        <BaseSelect 
                        option={
                            [Availability.immediate, Availability.zeroToFifteen, 
                            Availability.fifteenToThirty, Availability.moreThanThirty]
                        } 
                        label={"Availability"}
                        value={applicationOptions.availability}
                        onChange={(e)=>onChange("availability", e.target.value)} />
                        
                        <BaseSelect 
                        option={[Experience.zeroToTwo, Experience.twoToFive, Experience.moreThanFive]} 
                        label={"Experience"}
                        value={applicationOptions.experience}
                        onChange={(e)=>onChange("experience", e.target.value)} />
                        {/* if there is a button in form, it will close the modal */}
                        <div className="card-actions justify-end">
                            <BaseButton 
                            type={"button"} 
                            text={"Confirm"} 
                            className="btn btn-neutral"
                            handleOnClick={handleConfirmClick} />
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
        </JobDetailBaseCard>
    )
}