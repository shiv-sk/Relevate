import ApplicationCard from "@/components/card/applicationcard";
const applications = [
    {
        id:1,
        jobId:{
            title:"job1",
            companyId:{
                name:"company1"
            }
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
            companyId:{
                name:"company2"
            }
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
            companyId:{
                name:"company3"
            }
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
        <div className="min-h-screen bg-base-300 py-10">
            <div className="flex items-center flex-col space-y-4">
                <h1 className="font-bold text-lg">Applications</h1>
                <ApplicationCard applications={applications}/>
            </div>
        </div>
    )
}