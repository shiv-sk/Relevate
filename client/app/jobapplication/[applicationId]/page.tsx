"use client";

import { baseUrl, getAndDeleteReq } from "@/apicalls/apiCalls";
import Application from "@/components/application/application";
import { Loadingstate } from "@/components/forms/loadingState";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobApplication(){

    const {applicationId} = useParams();
    const [application, setApplication] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const getApplication = async()=>{
            try {
                setIsLoading(true);
                const response = await getAndDeleteReq(`${baseUrl}/application/user/${applicationId}`, "GET");
                setApplication(response);
            } catch (error) {
                console.log("error from jobApplication page!", error);
            }finally{
                setIsLoading(false);
            }
        }
        getApplication();
    }, [applicationId]);

    return(
        <div className="min-h-screen py-6 bg-base-300">
            <div className="
            flex flex-col justify-center items-center py-6 w-full max-w-[620px] 
            mx-auto space-y-4 border-2 px-2">
                {
                    isLoading ? (
                        <Loadingstate className="loading-xl"/>
                    ) : application ? (
                        <>
                            <Application application={application} />
                        </>
                    ): (
                        <div>
                            <p>No application!</p>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}