"use client";
import { SocialMedia, Company } from "@/interfaces/company";
import H1 from "../headers/h1";
import H3 from "../headers/h3";
import BaseButton from "./baseButton";
import BaseInput from "./baseInput";
import Textarea from "./textarea";

export default function CompanyForm(
    {
        onChange, 
        socialMediaOnChange, 
        company, 
        socialMedia, 
        handleSocialMediaAdd, 
        onSubmit, 
        isLoading
    }: 
    {
        onChange: (val: string, key: string) => void, 
        socialMediaOnChange: (val: string, key: keyof SocialMedia) => void, 
        company: Company,
        socialMedia: SocialMedia,
        handleSocialMediaAdd: ()=>void,
        onSubmit: (e: React.FormEvent<HTMLFormElement>)=>void,
        isLoading: boolean
    }){
    return(
        <div 
        className="bg-base-100 flex flex-col justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto">
            <H1 heading={"NewCompany"}/>
            <form className="gap-2.5 py-6 space-y-3 w-full" onSubmit={(e)=>onSubmit(e)}>
                <BaseInput 
                type={"text"} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange(e.target.value, "name")} 
                value={company.name} 
                label="Name"/>

                <BaseInput 
                type={"email"} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange(e.target.value, "officialEmail")} 
                value={company.officialEmail} 
                label="OfficialEmail"/>

                <Textarea 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>onChange(e.target.value, "about")} 
                value={company.about} 
                placeholder={"About company"} 
                className={""}
                label="About"/>

                <BaseInput 
                type={"text"} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange(e.target.value, "domain")} 
                value={company.domain} 
                label="Domain"/>

                <BaseInput 
                type={"text"} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange(e.target.value, "size")} 
                value={company.size} 
                label="Size"/>

                <BaseInput 
                type={"text"} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange(e.target.value, "location")} 
                value={company.location} 
                label="Location"/>
                
                <div className="space-y-2">
                    <H3 title={"SocialMedia"}/>
                    <BaseInput 
                    type={"text"} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>socialMediaOnChange(e.target.value, "name")} 
                    value={socialMedia.name} 
                    label="Name"/>

                    <BaseInput 
                    type={"text"} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>socialMediaOnChange(e.target.value, "link")} 
                    value={socialMedia.link} 
                    label="Link"/>

                    <BaseButton 
                    type={"button"} 
                    text={"Add"} 
                    className="btn btn-secondary" 
                    handleOnClick={handleSocialMediaAdd}/>
                </div>
                <BaseButton 
                type={"submit"} 
                text={"Create"} 
                className="btn btn-primary w-full"
                isLoading={isLoading}/>
            </form>
        </div>
    )
}