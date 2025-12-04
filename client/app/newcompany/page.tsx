"use client";
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
        if(!socialMedia.name.trim() || !socialMedia.link.trim()){
            alert("name or link is missing from socialMedia");
            return;
        }
        setCompany({...company, socialMedia:[...company.socialMedia, socialMedia]});
        setSocialMedia({
            name:"",
            link:"" 
        })
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log("the button is clicked!");
        console.log("the company data is! " , company);
    }

    const [company, setCompany] = useState<CompanyInterface>({
        name:"",
        officialEmail:"",
        about:"",
        domain:"",
        size:"",
        address:"",
        contact:"",
        socialMedia:[]
    })

    const [socialMedia, setSocialMedia] = useState<SocialMedia>({
        name:"",
        link:""
    })

    return(
        <div className="min-h-screen bg-base-300 py-6">
            <div>
                <CompanyForm 
                onChange={handleOnChange} 
                socialMediaOnChange={handleSocialMediaOnChange} 
                company={company}
                socialMedia={socialMedia}
                handleSocialMediaAdd={handleSocialMediaAdd}
                onSubmit={handleOnSubmit}/>
            </div>
        </div>
    )
}
