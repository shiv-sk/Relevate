"use client";

import { baseUrl, getAndDeleteReq } from "@/apicalls/apiCalls";
import JobDetail from "@/components/card/jobdetailcard";
import { Loadingstate } from "@/components/forms/loadingState";
import { Availability, Experience, PreferredLocation, SalaryExcepted } from "@/constants/applicationFilterContest";
import { useAuth } from "@/context/authcontext";
import { ApplicationOptions } from "@/interfaces/applicationInterface";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AboutJob(){
    const {jobId} = useParams();
    const [job, setJob] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {user, isLoading: isAuthLoading} = useAuth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [error, setError] = useState<any | null>(null);
    useEffect(()=>{
        const getJob = async()=>{
            if(!jobId){
                return;
            }
            try {
                setIsLoading(true);
                const response = await getAndDeleteReq(`${baseUrl}/job/${jobId}`, "GET");
                setJob(response);
            } catch (error) {
                console.log("error from getJob! ", error);
                setError(error);
            }finally{
                setIsLoading(false);
            }
        }
        getJob();
    }, [jobId]);

    const confirmRef = useRef<HTMLDialogElement | null>(null);

    const handleOnClick = ()=>{
        if(!isAuthLoading && !user){
            alert("please login to apply job");
            return;
        }
        try {
            confirmRef.current?.showModal();
        } catch (error) {
            console.log("error of dialogbox! ", error);
        }
    }

    const  handleConfirmClick = ()=>{
        if(Object.values(applicationOptions).length === 0){
            alert("please select the options!");
            return;
        }
        const dataTosend = {
            jobId,
            applicationOptions
        };
        try {
            confirmRef.current?.close();
            console.log("the final data to send! ", dataTosend);
        } catch (error) {
            console.log("error of dialogbox! ", error);
        }
    }

    const [applicationOptions, setApplicationOptions] = useState<ApplicationOptions>({
        salaryExcepted: SalaryExcepted.ThreeToFive,
        preferredLocation: PreferredLocation.allOfTheAbove,
        availability: Availability.immediate,
        experience: Experience.zeroToTwo,
    });
    
    const handleOnChange = (key: string, value: string)=>{
        setApplicationOptions({...applicationOptions, [key]: value});
    }

    return(
        <div className="py-6 bg-base-300 min-h-screen">
            <div className="w-full max-w-[580px] mx-auto space-y-4">
                {
                    isLoading ? (
                        <Loadingstate className="loading-xl"/>  
                    ) : job ? (
                        <>
                            <JobDetail 
                            job={job} 
                            confirmRef={confirmRef} 
                            onClick={handleOnClick} 
                            applicationOptions={applicationOptions} 
                            onChange={handleOnChange}
                            handleConfirmClick={handleConfirmClick} />
                        </>
                    ) : (
                        <div>
                            <p>No job detail</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}