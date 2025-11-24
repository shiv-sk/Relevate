import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Projects from "./projects";
import Skills from "./skills";
import SocialMedia from "./socialmedia";

export default function ProfileDisplay(){
    return(
        <div>
            <Header/>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Projects/>
            <SocialMedia/>
        </div>
    )
}