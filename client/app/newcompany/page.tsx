/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { baseUrl, postAndPatchReq } from "@/apicalls/apiCalls";
import CompanyForm from "@/components/forms/companyForm";
import {Company as CompanyInterface, SocialMedia} from "@/interfaces/company";
import { useState } from "react";

export default function NewCompany(){

    const handleOnChange = (val: string, key: string)=>{
        setCompany({...company, [key]: val});
    }

    const handleSocialMediaOnChange = (val: string, key: keyof SocialMedia)=>{
        setSocialMedia({...socialMedia, [key]: val});
    }

    const handleSocialMediaAdd = ()=>{
        if(!socialMedia.name?.trim() || !socialMedia.link?.trim()){
            alert("name or link is missing from socialMedia");
            return;
        }
        setCompany({...company, socialMedia:[...company.socialMedia, socialMedia]});
        setSocialMedia({
            name:"",
            link:"" 
        })
    }

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!company.name.trim() || !company.about.trim() || !company.officialEmail.trim() 
            || !company.domain.trim() || !company.location.trim() || !company.size.trim()){
                alert("please fill required fields!");
                return;
            }
        try {
            setIsLoading(true);
            const response = await postAndPatchReq(`${baseUrl}/company`, "POST", company);
            console.log("the response from newCompany page!", response);
        } catch (error: any) {
            console.log("the error from newCompany page!", error);
        }finally{
            setIsLoading(false);
        }
        console.log("the company data is! " , company);
    }

    const [company, setCompany] = useState<CompanyInterface>({
        name:"",
        officialEmail:"",
        about:"",
        domain:"",
        size:"",
        location:"",
        socialMedia:[]
    })

    const [socialMedia, setSocialMedia] = useState<SocialMedia>({
        name:"",
        link:""
    })

    const [isLoading, setIsLoading] = useState(false);

    return(
        <div className="min-h-screen bg-base-300 py-6">
            <div>
                <CompanyForm 
                onChange={handleOnChange} 
                socialMediaOnChange={handleSocialMediaOnChange} 
                company={company}
                socialMedia={socialMedia}
                handleSocialMediaAdd={handleSocialMediaAdd}
                onSubmit={handleOnSubmit}
                isLoading={isLoading}/>
            </div>
        </div>
    )
}
