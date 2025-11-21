"use client";
import JobCardSimple from "@/components/card/jobsimple.card";
import Filter from "@/components/filter/filter";
import SearchBar from "@/components/searchbar/search";
import { useState } from "react";

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
    {
        id:4,
        title:"job1",
        location:"xyz",
        salary:50000,
        level:"Intern",
        type:"Intership",
    },
    {
        id:5,
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
    const [search, setSearch] = useState("");

    const handleOnChange = (value: string)=>{
        setSearch(value);
    }

    return(
        <div className="space-y-3.5 py-5 bg-base-300 min-h-screen ">
            <div className="flex flex-col gap-6 items-center w-full mx-auto">
                <Filter />
                <SearchBar onChange={undefined} value={undefined} label={""}/>
                <div className="">
                    <JobCardSimple job={job} onApply={onApply}></JobCardSimple>
                </div>
            </div> 
        </div>
    )
}