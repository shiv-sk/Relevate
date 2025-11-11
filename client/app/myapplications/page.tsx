import ApplicationCard from "@/components/card/applicationcard";
const applications = [
    {
        id:1,
        jobId:{
            title:"job1",
        },
        userId:"123",
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
    {
        id:2,
        jobId:{
            title:"job2",
        },
        userId:"123",
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
    {
        id:3,
        jobId:{
            title:"job3",
        },
        userId:"123",
        profileId:"123",
        status:"Applied",
        createdAt:"24/5/2020",
        updatedAt:"24/5/2020",
    },
]

export default function MyApplications(){
    return(
        <div className="min-h-screen flex items-center flex-col space-y-4 py-10">
            <h1 className="font-bold text-lg">Applications</h1>
            <ApplicationCard applications={applications}/>
        </div>
    )
}