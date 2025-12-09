"use client";

import BaseButton from "../forms/baseButton";
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Projects from "./projects";
import Skills from "./skills";
import SocialMedia from "./socialmedia";

export default function ProfileDisplay(){
    return(
        <div className="min-h-screen bg-base-300 py-6">
            <div 
            className="
            flex flex-col justify-center py-6 w-full max-w-[720px] 
            mx-auto space-y-2 px-4 rounded-lg shadow-lg">
                <Header/>
                <About/>
                <Skills/>
                <Education/>
                <Experience/>
                <Projects/>
                <SocialMedia/>
                <div className="card-actions justify-end">
                    <BaseButton type={"button"} text={"Edit"} className="btn btn-primary"/>
                    <BaseButton type={"button"} text={"Delete"} className="btn btn-primary"/>
                </div>
            </div>
        </div>
    )
}