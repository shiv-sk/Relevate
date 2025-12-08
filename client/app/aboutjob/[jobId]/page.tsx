"use client";

import JobDetail from "@/components/card/jobdetailcard";
import { Availability, Experience, PreferredLocation, SalaryExcepted } from "@/constants/applicationFilterContest";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";

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
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa magnam, inventore sit ullam hic perferendis odit, aspernatur maiores voluptate quod, velit mollitia vitae facere corporis quas vero. Sunt provident recusandae aliquid magni error at officia molestias nulla! Ipsa beatae, quo architecto quaerat delectus neque perferendis impedit id vel quod incidunt laudantium provident, cupiditate veniam, eligendi aspernatur! Adipisci optio odio vero unde vitae enim tempore consequatur fugit, assumenda minus corrupti quia corporis, aspernatur ullam ut nulla at amet distinctio aperiam alias quibusdam. Sed recusandae vero itaque sunt repellat sit, animi eaque? Enim, debitis. Aut aperiam, dicta architecto adipisci, dignissimos aliquam autem laborum ex, minima sit quasi beatae inventore ratione ad explicabo. Autem, ipsum maxime mollitia officiis quod quisquam recusandae, nam laborum sed odio vel dolores exercitationem earum, ipsa iure sint voluptatibus nisi voluptas possimus cum consequatur magnam! Eveniet beatae dignissimos assumenda id perferendis harum quaerat, voluptate alias facilis dolore"
    },
    location:"OnSite",
    salary:5000,
    type:"Internship",
    level:"Intern",
    requiredSkills:["skill1" , "skill2" , "skill3" , "skill4"],
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa magnam, inventore sit ullam hic perferendis odit, aspernatur maiores voluptate quod, velit mollitia vitae facere corporis quas vero. Sunt provident recusandae aliquid magni error at officia molestias nulla! Ipsa beatae, quo architecto quaerat delectus neque perferendis impedit id vel quod incidunt laudantium provident, cupiditate veniam, eligendi aspernatur! Adipisci optio odio vero unde vitae enim tempore consequatur fugit, assumenda minus corrupti quia corporis, aspernatur ullam ut nulla at amet distinctio aperiam alias quibusdam. Sed recusandae vero itaque sunt repellat sit, animi eaque? Enim, debitis. Aut aperiam, dicta architecto adipisci, dignissimos aliquam autem laborum ex, minima sit quasi beatae inventore ratione ad explicabo. Autem, ipsum maxime mollitia officiis quod quisquam recusandae, nam laborum sed odio vel dolores exercitationem earum, ipsa iure sint voluptatibus nisi voluptas possimus cum consequatur magnam! Eveniet beatae dignissimos assumenda id perferendis harum quaerat, voluptate alias facilis dolores libero."
}

export default function AboutJob(){
    const {jobId} = useParams();

    const confirmRef = useRef<HTMLDialogElement | null>(null);

    const handleOnClick = ()=>{
        console.log("button is clicked with data!");
        try {
            confirmRef.current?.showModal();
        } catch (error) {
            console.log("error of dialogbox! ", error);
        }
    }

    const  handleConfirmClick = ()=>{
        if(Object.values(applicationOptions).length === 0){
            alert("please select the options!");
            return;
        }
        const dataTosend = {
            jobId,
            applicationOptions
        };
        try {
            confirmRef.current?.close();
            console.log("the final data to send! ", dataTosend);
        } catch (error) {
            console.log("error of dialogbox! ", error);
        }
    }

    const [applicationOptions, setApplicationOptions] = useState({
        salaryExcepted: SalaryExcepted.ThreeToFive,
        preferredLocation: PreferredLocation.allOfTheAbove,
        availability: Availability.immediate,
        experience: Experience.zeroToTwo,
    });
    
    const handleOnChange = (key: string, value: string)=>{
        setApplicationOptions({...applicationOptions, [key]: value});
    }

    return(
        <div className="py-6 bg-base-300 min-h-screen">
            <div className="w-full max-w-[680px] mx-auto space-y-4">
                <JobDetail 
                job={job} 
                confirmRef={confirmRef} 
                onClick={handleOnClick} 
                applicationOptions={applicationOptions} 
                onChange={handleOnChange}
                 handleConfirmClick={handleConfirmClick} />
            </div>
        </div>
    )
}