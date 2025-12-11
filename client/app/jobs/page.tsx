"use client";

import JobCardSimple from "@/components/card/jobsimple.card";
import { Loadingstate } from "@/components/forms/loadingState";
import SearchBar from "@/components/searchbar/search";
import Filter from "@/components/sidebar/filter";
import { useAuth } from "@/context/authcontext";
import { useGetCompanyAllJobs } from "@/customhooks/job";
import { useState } from "react";

export default function CompanyJobs(){

    const [search, setSearch] = useState("");
    const {companyJobs, isLoading} = useGetCompanyAllJobs()
    const {user} = useAuth();

    const handleOnSearchChange = (val: string)=>{
        setSearch(val);
    }

    const handleSearchOnClick = ()=>{
        if(!search.trim()){
            alert("enter atleast three characters to search");
            return;
        }
        console.log("the serach is!", search);
    }

    return(
        <div className="space-y-3.5 py-5 bg-base-300 min-h-screen ">
            <div className="flex flex-col gap-6 w-full mx-auto lg:max-w-[1200px]">
                <div className="w-full max-w-[600px] mx-auto">
                    <SearchBar 
                    value={search} 
                    onSearchChange={handleOnSearchChange} 
                    handleSearchOnClick={handleSearchOnClick}/>
                </div>
                <div className="flex flex-wrap gap-6 w-full">
                    <div className="w-full lg:w-[30%] py-4 px-4 lg:sticky lg:top-4 h-fit">
                        <Filter />
                    </div>
                    <div className="w-full lg:w-[60%] py-4">
                        {
                            isLoading ? (
                                <Loadingstate className="loading-xl"/>
                            ) : companyJobs.length > 0 ? (
                                <>
                                    <JobCardSimple jobs={companyJobs}></JobCardSimple>
                                </>
                            ) : (
                                <div>
                                    <p>No jobs</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> 
        </div>
    )
}