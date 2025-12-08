"use client";
import { useRef, useState } from "react";
import BaseButton from "../forms/baseButton";
import BaseApplicationCard from "./baseapplicationcard";

export default function ApplicationCard({applications}){
    const applicationRef = useRef<HTMLDialogElement | null>(null);
    const [applicatonData, setApplicationData] = useState(null);
    const handleOnClick = (application)=>{
        console.log("button is clicked!!");
        console.log(application);
        try {
            applicationRef.current?.showModal();
            setApplicationData(application);
        } catch (error) {
            console.error("Dailogbox error! " , error);
        }
        console.log("this line is printing after ref ele");
    }
    return(
        <div className="gap-3 px-2 py-4 flex flex-wrap justify-center items-center border-2">
            {
                applications.map((application)=>(
                    <BaseApplicationCard key={application.id} className="md:w-[480px] w-[350px]">
                        <div className="py-4 px-3 flex-col border-2">
                            <h3 className="card-title">{application.jobId.title}</h3>
                            <h5>{application.jobId.companyId.name}</h5>
                            <div className="flex gap-2 space-x-2 items-center">
                                <p className="text-sm mt-2 font-bold">AppliedAt: 
                                    <span className="font-normal">&nbsp;{application.createdAt}</span>
                                </p>
                                <p className="text-sm mt-2 font-bold">Status: 
                                    <span className="font-normal">&nbsp;{application.status}</span>
                                </p>
                            </div>
                            <div className="card-actions justify-end">
                                <BaseButton type={"button"} 
                                text="View" 
                                className="btn btn-primary"
                                handleOnClick={()=>handleOnClick(application)}/>
                            </div>
                        </div>
                    </BaseApplicationCard> 
                ))
            }
            {
                applicatonData && (
                    <dialog ref={applicationRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">{applicatonData?.jobId.title}</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                )
            }
        </div>
        
    )
}