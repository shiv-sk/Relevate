import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Projects from "./projects";
import Skills from "./skills";
import SocialMedia from "./socialmedia";

export default function ProfileDisplay(){
    return(
        <div className="min-h-screen bg-base-300">
            <div 
            className="
            flex flex-col justify-center items-center py-6 w-full max-w-[720px] 
            mx-auto space-y-4">
                <Header/>
                <About/>
                <Skills/>
                <Education/>
                <Experience/>
                <Projects/>
                <SocialMedia/>
            </div>
        </div>
    )
}