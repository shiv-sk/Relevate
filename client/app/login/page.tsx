"use client";
import JobCardSimple from "@/components/card/jobsimple.card";

const job = [
    {
        id:1,
        title:"job1",
        location:"xyz",
        salary:50000,
        level:"Intern",
        type:"Fulltime",
    },
    {
        id:2,
        title:"job1",
        location:"xyz",
        salary:50000,
        level:"Entery",
        type:"PartTime",
    },
    {
        id:3,
        title:"job1",
        location:"xyz",
        salary:50000,
        level:"Intern",
        type:"Intership",
    },
]
const onApply = ()=>{
    console.log("on apply button is clicked0000!");
}
export default function Login(){
    return(
        <JobCardSimple job={job} onApply={onApply}></JobCardSimple>
    )
}