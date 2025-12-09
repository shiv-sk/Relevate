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

    const handleAddSkill = ()=>{
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

    const handleEducationChange = (key: keyof Education, value: string | number)=>{
        setEducation({...education, [key]: value});
    }

    const handleAddEducation = ()=>{
        if(!education.institute.trim()){
            alert("Institute is required");
            return;
        }else if(!education.degree.trim()){
            alert("Degree is required");
            return;
        }else if(!education.passoutYear){
            alert("passoutYear is required");
            return;
        }

        setForm({...form, education: [...form.education, education]});
        setEducation({
            institute:"",
            degree:"",
            passoutYear:0
        })
    }
    const handleProjectsChange = (key: keyof Projects, value: string)=>{
        setProject({...project, [key]: value});
    }
    const handleProjectLinksChange = (key: keyof Projects["links"], value: string)=>{
        setProject((prev)=>({
            ...prev,
            links:{
                ...prev.links,
                [key]: value,
            }
        }));
    }

    const handleAddProject = ()=>{
        if(!project.name.trim()){
            alert("Projectname is required");
            return;
        }else if(!project.description.trim()){
            alert("Project description is required");
            return;
        }else if(!project.links){
            alert("Project links are required");
            return;
        }

        setForm({...form, projects: [...form.projects, project]});
        setProject({
            name:"",
            description:"",
            links:{
                github:"",
                live:"",
                demo:"",
                article:""
            }
        })
    }
    const handleExperienceChange = (key: keyof Experience, value: string | number)=>{
        setExperience({...experience, [key]: value});
    }

    const handleAddExperience = ()=>{
        if(!experience.company.trim()){
            alert("Company name is required");
            return;
        }else if(!experience.role.trim()){
            alert("Role is required");
            return;
        }else if(!experience.noticeperiod.trim()){
            alert("Noticeperiod is required");
            return;
        }else if(!experience.years){
            alert("No. of Experience years is required");
            return;
        }

        setForm({...form, experience: [...form.experience, experience]});
        setExperience({
            company:"",
            role:"",
            years:0,
            noticeperiod:""
        })
    }
    const handleSocialMediaChange = (key: keyof SocialMedia, value: string)=>{
        setSocialMedia({...socialMedia, [key]: value});
    }

    const handleAddSocialMedia = ()=>{
        if(!socialMedia.name.trim()){
            alert("SocialMedia name is required");
            return;
        }else if(!socialMedia.link.trim()){
            alert("SocialMedia link is required");
            return;
        }

        setForm({...form, socialMedia: [...form.socialMedia, socialMedia]});
        setSocialMedia({
            name:"",
            link:"",
        })
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(
            !form.name.trim() || !form.currentLocation.trim() 
            || !form.email.trim() || !form.lookingFor.trim() || form.skills.length === 0){
                alert("please fill required fields!");
                return;
            }
        console.log("the button is clicked with form data", form);
    }

    return(
        <div className="min-h-screen gap-4 py-5 bg-base-300">
            <NewProfileForm 
            skill={skill} 
            onChange={handleOnChange} 
            onSubmit={handleOnSubmit} 
            addSkill={handleAddSkill}
            addEducation = {handleAddEducation}
            addProject = {handleAddProject}
            addSocialMedia = {handleAddSocialMedia}
            addExperience = {handleAddExperience}
            onEducationChange = {handleEducationChange}
            onExperienceChange = {handleExperienceChange}
            onProjectChange = {handleProjectsChange}
            onProjectLinkChange = {handleProjectLinksChange}
            onSocialMediaChange = {handleSocialMediaChange}
            form={form}
            education={education}
            project={project}
            experience={experience}
            socialMedia={socialMedia} />
        </div>
    )
}