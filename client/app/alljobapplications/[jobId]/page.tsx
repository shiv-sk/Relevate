"use client";
import AllJobApplicationsCard from "@/components/card/alljobapplications";

const applications = [
    {
        id:1,
        jobId:2,
        userId:{
            name:"user2",
            email:"user2@email.com"
        },
        snapshot:{
            lookingFor:"role2"
        },
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
    {
        id:2,
        jobId:1,
        userId:{
            name:"user3",
            email:"user3@email.com"
        },
        snapshot:{
            lookingFor:"role1"
        },
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
    {
        id:3,
        jobId:1,
        userId:{
            name:"user1",
            email:"user1@email.com"
        },
        snapshot:{
            lookingFor:"role1"
        },
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
]

export default function AllApplications(){
    return(
        <div className="min-h-screen bg-base-300 py-10">
            <div className="flex items-center flex-col space-y-4">
                <h1 className="font-bold text-lg">Applications</h1>
                <AllJobApplicationsCard applications={applications}/>
            </div>
        </div>
    )
}