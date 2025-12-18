"use client";

import { baseUrl, getAndDeleteReq } from "@/apicalls/apiCalls";
import AllJobApplicationsCard from "@/components/card/alljobapplications";
import ApplicationFilter from "@/components/filter/applicationfilter";
import { Loadingstate } from "@/components/forms/loadingState";
import { Availability, Experience, PreferredLocation, SalaryExcepted } from "@/constants/applicationFilterContest";
import { JobApplication } from "@/interfaces/applicationInterface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AllApplications(){

    const {jobId} = useParams();
    const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const getJobApplications = async()=>{
            if(!jobId){
                return;
            }
            try {
                setIsLoading(true);
                const response = await getAndDeleteReq(`${baseUrl}/application/${jobId}`, "GET");
                setJobApplications(response);
            } catch (error) {
                console.log("error from jobApplications!", error);
            }finally{
                setIsLoading(false);
            }
        }
        getJobApplications();
    }, [jobId]);

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
                        {
                            isLoading ? (
                                <Loadingstate className="loading-xl"/>
                            ) : jobApplications.length > 0 ? (
                                <AllJobApplicationsCard applications={jobApplications}/>
                            ) : (
                                <div>
                                    <p>No job applications!</p>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <div className="fab">
                {/* a focusable div with tabIndex is necessary to work on all browsers. 
                role="button" is necessary for accessibility */}
                <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-primary">VA</div>

                {/* buttons that show up when FAB is open */}
                <button className="btn btn-md btn-secondary">Rank Candidates</button>
            </div>
        </div>
    )
}