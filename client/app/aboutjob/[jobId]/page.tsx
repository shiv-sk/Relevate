import JobDetail from "@/components/card/jobdetailcard";

const job = {
    title:"job1",
    companyId:{
        name:"company1",
        socialMedia:[
            {
                name:"socialmedia1",
                link:"link1"
            },
            {
                name:"socialmedia2",
                link:"link2"
            },
            {
                name:"socialmedia3",
                link:"link3"
            },
        ],
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa magnam, inventore sit ullam hic perferendis odit, aspernatur maiores voluptate quod, velit mollitia vitae facere corporis quas vero. Sunt provident recusandae aliquid magni error at officia molestias nulla! Ipsa beatae, quo architecto quaerat delectus neque perferendis impedit id vel quod incidunt laudantium provident, cupiditate veniam, eligendi aspernatur! Adipisci optio odio vero unde vitae enim tempore consequatur fugit, assumenda minus corrupti quia corporis, aspernatur ullam ut nulla at amet distinctio aperiam alias quibusdam. Sed recusandae vero itaque sunt repellat sit, animi eaque? Enim, debitis. Aut aperiam, dicta architecto adipisci, dignissimos aliquam autem laborum ex, minima sit quasi beatae inventore ratione ad explicabo. Autem, ipsum maxime mollitia officiis quod quisquam recusandae, nam laborum sed odio vel dolores exercitationem earum, ipsa iure sint voluptatibus nisi voluptas possimus cum consequatur magnam! Eveniet beatae dignissimos assumenda id perferendis harum quaerat, voluptate alias facilis dolores libero."
    },
    location:"OnSite",
    salary:5000,
    type:"Internship",
    level:"Intern",
    requiredSkills:["skill1" , "skill2" , "skill3" , "skill4"],
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa magnam, inventore sit ullam hic perferendis odit, aspernatur maiores voluptate quod, velit mollitia vitae facere corporis quas vero. Sunt provident recusandae aliquid magni error at officia molestias nulla! Ipsa beatae, quo architecto quaerat delectus neque perferendis impedit id vel quod incidunt laudantium provident, cupiditate veniam, eligendi aspernatur! Adipisci optio odio vero unde vitae enim tempore consequatur fugit, assumenda minus corrupti quia corporis, aspernatur ullam ut nulla at amet distinctio aperiam alias quibusdam. Sed recusandae vero itaque sunt repellat sit, animi eaque? Enim, debitis. Aut aperiam, dicta architecto adipisci, dignissimos aliquam autem laborum ex, minima sit quasi beatae inventore ratione ad explicabo. Autem, ipsum maxime mollitia officiis quod quisquam recusandae, nam laborum sed odio vel dolores exercitationem earum, ipsa iure sint voluptatibus nisi voluptas possimus cum consequatur magnam! Eveniet beatae dignissimos assumenda id perferendis harum quaerat, voluptate alias facilis dolores libero."
}

export default function AboutJob(){
    return(
        <div className="py-6 w-full max-w-[720px] mx-auto bg-base-100 space-y-4">
            <JobDetail job={job} />
            <div className="flex justify-end gap-2">
                <button className="btn btn-primary">
                    Apply
                </button>
                <button className="btn btn-secondary">
                    AI-detail
                </button>
            </div>
        </div>
    )
}