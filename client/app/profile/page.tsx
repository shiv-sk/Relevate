"use client";

import NewProfileForm from "@/components/forms/newProfileForm";
import { Education, Experience, ProfileInterface, Projects, SocialMedia } from "@/interfaces/profileInterface";
import { useState } from "react";

export default function NewProfile(){
    const [skill, setSkill] = useState("");
    const [education, setEducation] = useState<Education>({
        institute:"",
        degree:"",
        passoutYear:0,
    });
    const [project, setProject] = useState<Projects>({
        name:"",
        description:"",
        links:{
            github:"",
            live:"",
            demo:"",
            article:""
        }
    });
    const [experience, setExperience] = useState<Experience>({
        company:"",
        role:"",
        noticeperiod:"",
        years:0
    });
    const [socialMedia, setSocialMedia] = useState<SocialMedia>({
        name:"",
        link:""
    });
    const [form, setForm] = useState<ProfileInterface>({
        name:"",
        email:"",
        bio:"",
        currentLocation:"",
        lookingFor:"",
        skills:[],
        education:[],
        projects:[],
        experience:[],
        socialMedia:[]
    });

    const handleAddSkill = (skill: string)=>{
        if(!skill.trim()){
            alert("can not add empty skill");
            return;
        }
        const skills = form.skills;
        const duplicateSkill = skills.some((s)=>{
            return s === skill
        })
        if(duplicateSkill){
            alert("duplicate skills are not allowed");
            return;
        }
        setForm({...form, skills:[...form.skills, skill]});
        setSkill("");
    }

    const handleOnChange = (key: string, value: string)=>{
        if(key === "skill"){
            setSkill(value);
        }
        setForm({...form, [key]: value});
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log("the button is clicked with form data", form);
    }

    return(
        <div className="min-h-screen gap-4 py-5 bg-base-300">
            <NewProfileForm 
            skill={skill} 
            onChange={handleOnChange} 
            onSubmit={handleOnSubmit} 
            addSkill={handleAddSkill} 
            form={form} />
        </div>
    )
}