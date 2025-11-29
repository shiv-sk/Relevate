"use client";
import { SocialMedia, Company } from "@/interfaces/company";
import H1 from "../headers/h1";
import H3 from "../headers/h3";
import BaseButton from "./baseButton";
import BaseInput from "./baseInput";
import Textarea from "./textarea";

export default function CompanyForm({onChange, socialMediaOnChange, company, socialMedia, handleSocialMediaAdd, onSubmit}: 
    {
        onChange: (val: string, key: string) => void, 
        socialMediaOnChange: (val: string, key: keyof SocialMedia) => void, 
        company: Company,
        socialMedia: SocialMedia,
        handleSocialMediaAdd: ()=>void,
        onSubmit: ()=>void
    }){
    return(
        <div 
        className="bg-base-100 flex flex-col justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto">
            <H1 heading={"NewCompany"}/>
            <form className="gap-2.5 py-6 space-y-3 w-full" onSubmit={onSubmit}>
                <BaseInput 
                type={"text"} 
                onChange={(e)=>onChange(e.target.value, "name")} 
                value={company.name} 
                label="Name"/>

                <BaseInput 
                type={"email"} 
                onChange={(e)=>onChange(e.target.value, "officialEmail")} 
                value={company.officialEmail} 
                label="OfficialEmail"/>

                <Textarea 
                onChange={(e)=>onChange(e.target.value, "about")} 
                value={company.about} 
                placeholder={"About company"} 
                className={""}
                label="About"/>

                <BaseInput 
                type={"text"} 
                onChange={(e)=>onChange(e.target.value, "domain")} 
                value={company.domain} 
                label="Domain"/>

                <BaseInput 
                type={"text"} 
                onChange={(e)=>onChange(e.target.value, "size")} 
                value={company.size} 
                label="Size"/>

                <BaseInput 
                type={"text"} 
                onChange={(e)=>onChange(e.target.value, "address")} 
                value={company.address} 
                label="Address"/>

                <BaseInput 
                type={"text"} 
                onChange={(e)=>onChange(e.target.value, "contact")} 
                value={company.contact} 
                label="Contact"/>
                
                <div className="space-y-2">
                    <H3 title={"SocialMedia"}/>
                    <BaseInput 
                    type={"text"} 
                    onChange={(e)=>socialMediaOnChange(e.target.value, "name")} 
                    value={socialMedia.name} 
                    label="Name"/>

                    <BaseInput 
                    type={"text"} 
                    onChange={(e)=>socialMediaOnChange(e.target.value, "link")} 
                    value={socialMedia.link} 
                    label="Link"/>

                    <BaseButton 
                    type={"button"} 
                    text={"Add"} 
                    className="btn btn-secondary" 
                    handleOnClick={handleSocialMediaAdd}/>
                </div>
                <BaseButton type={"submit"} text={"Create"} className="btn btn-primary w-full"/>
            </form>
        </div>
    )
}