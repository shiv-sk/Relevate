import Application from "@/components/application/application";

const applications = [
    {
        userId:1,
        profileId:1,
        jobId:1,
        status:"Applied",
        snapShot:{
            name:"user1",
            email:"user1@email.com",
            lookingFor:"role1",
            skills:["skill1", "skill2", "skill3", "skill4"],
            currentLocation:"location1",
            experience:[
                {
                    company:"company1",
                    role:"role1",
                    noticePeriod:"15",
                    years:1
                },
                {
                    company:"company2",
                    role:"role1",
                    noticePeriod:"15",
                    years:2
                }
            ],
            projects:[
                {
                    name:"project1",
                    description:"project1 description",
                    links:{
                        github:"github.com",
                        live:"project.live",
                        demo:"project-demo",
                        article:"projectArticle.com"
                    }
                },
                {
                    name:"project2",
                    description:"project2 description",
                    links:{
                        github:"github.com",
                        live:"project.live",
                        demo:"project-demo",
                        article:"projectArticle.com"
                    }
                },
                {
                    name:"project3",
                    description:"project3 description",
                    links:{
                        github:"github.com",
                        live:"project.live",
                        demo:"project-demo",
                        article:"projectArticle.com"
                    }
                },
            ]
        }
    }
]

export default function JobApplication(){
    return(
        <div className="min-h-screen py-6 bg-base-300">
            <div className="
            flex flex-col justify-center items-center py-6 w-full max-w-[620px] 
            mx-auto space-y-4 border-2 px-2">
                <Application/>
            </div>
        </div>
    )
}