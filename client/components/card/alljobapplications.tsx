"use client";

import Link from "next/link";
import BaseButton from "../forms/baseButton";
import BaseApplicationCard from "./baseapplicationcard";

export default function AllJobApplicationsCard({applications}){
    return(
        <div className="gap-3 px-2 py-4 flex flex-wrap justify-center items-center border-2">
            {
                applications.map((application)=>(
                    <BaseApplicationCard key={application.id} className="md:w-[680px] w-[350px]">
                        <div className="py-4 px-3 flex-col border-2">
                            <h3 className="text-lg font-bold">Name: 
                                <span className="font-normal">Name of candidate</span>
                            </h3>
                            <h5 className="text-lg font-bold">Email: 
                                <span className="font-normal text-base">Email of candidate</span>
                            </h5>
                            <h5 className="text-lg font-bold">Role: 
                                <span className="font-normal text-base">user lookingFor</span>
                            </h5>
                            <div className="card-actions justify-end">
                                <Link href={`/jobapplication/${application.id}`}>
                                    <BaseButton type={"button"} 
                                    text="View" 
                                    className="btn btn-primary"/>
                                </Link>
                            </div>
                        </div>
                    </BaseApplicationCard> 
                ))
            }
        </div>
        
    )
}