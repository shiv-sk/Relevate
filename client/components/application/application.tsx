"use client";

import { JobApplication } from "@/interfaces/applicationInterface";
import BaseButton from "../forms/baseButton";
import ApplicationHeader from "./applicationheader";
import UserFooter from "./userfooter";
import UserInfo from "./userInfo";

export default function Application({application}: {application: JobApplication}){
    return(
        <div className="w-full px-2 py-4 space-y-5">
            <ApplicationHeader 
            name={application.profileSnapshot?.name ?? "Name"} 
            email={application.profileSnapshot?.email ?? "Email"} 
            role={application.profileSnapshot?.lookingFor ?? "Role"} />

            <UserInfo 
            skills={application.profileSnapshot?.skills || []} 
            projects={application.profileSnapshot?.projects || []} 
            experience={application.profileSnapshot?.experience || []} />

            <UserFooter 
            salaryExcepted={application.salaryExcepted} 
            preferredLocation={application.preferredLocation} 
            availability={application.availability} 
            experience={application.experience} />

            <div className="card-actions justify-end">
                <BaseButton type={"button"} text={"Connect"} className="btn btn-primary"/>
                <BaseButton type={"button"} text={"Reject"} className="btn btn-secondary"/>
                <BaseButton type={"button"} text={"Updatedprofile"} className="btn btn-neutral"/>
            </div>
        </div>
    )
}