import Experience from "../profile/experience";
import Projects from "../profile/projects";
import Skills from "../profile/skills";

export default function UserInfo(){
    return(
        <div className="flex flex-col gap-5 py-4 px-2 bg-base-300 rounded-lg shadow-xl w-full">
            <Skills/>
            <Projects/>
            <Experience/>
        </div>
    )
}