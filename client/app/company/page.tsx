"use client";

import Company from "@/components/company/company";
import { Loadingstate } from "@/components/forms/loadingState";
import { useGetCompany } from "@/customhooks/company";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CompanyPage(){
    const { company, isLoading } = useGetCompany();
    const router = useRouter();

    useEffect(()=>{
        if(!isLoading && company === null){
            router.push("/newcompany");
        }
    }, [isLoading, company, router]);

    return(
        <div className="min-h-screen bg-base-100 py-6">
            <div className="bg-base-200 rounded-lg py-4 w-full max-w-[620px] 
            mx-auto space-y-4 border-2 px-2">
                {
                    isLoading ? (
                        <Loadingstate className="loading-xl"/>
                    ) : company ? (
                            <Company company={company} />
                    ) : ""
                }
            </div>
        </div>
    )
}