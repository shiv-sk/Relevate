import BaseButton from "./baseButton";
import BaseInput from "./baseInput";
import Textarea from "./textarea";

export default function NewProfileForm(
    {
        skill, onChange, onSubmit, addSkill, form, addEducation, addProject, 
        addSocialMedia, addExperience, onEducationChange, onExperienceChange, 
        onProjectChange, onSocialMediaChange, education, project, experience, socialMedia, onProjectLinkChange,
        isLoading
    }){
    return(
        <div className="bg-base-100 flex justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto flex-col">
            <h1 className="text-center font-bold text-2xl underline">NewProfile</h1>
            <div>
                <form action="" className="gap-2.5 py-6 space-y-3 w-full" onSubmit={onSubmit}>
                    <BaseInput 
                    label="Name" 
                    type="text" 
                    onChange={(e)=>onChange("name", e.target.value)} 
                    value={form.name} 
                    placeholder="John Doe" />
                            
                    <BaseInput 
                    label="Email" 
                    type="text" 
                    onChange={(e)=>onChange("email", e.target.value)} 
                    value={form.email} 
                    placeholder="exp123@email.com" />
        
                    <BaseInput 
                    label="CurrentLocation" 
                    type="text" 
                    onChange={(e)=>onChange("currentLocation", e.target.value)} 
                    value={form.currentLocation} 
                    placeholder="Dehli" />

                    <BaseInput 
                    label="Expectingjobrole" 
                    type="text" 
                    onChange={(e)=>onChange("lookingFor", e.target.value)} 
                    value={form.lookingFor} 
                    placeholder="Testing" />

                    <Textarea 
                    label="Bio" 
                    value={form.bio} 
                    onChange={(e)=>onChange("bio", e.target.value)} 
                    placeholder={"bio"} />

                    <div className="space-y-1.5">
                        <BaseInput 
                        label="Skill" 
                        type="text" 
                        onChange={(e)=>onChange("skill", e.target.value)} 
                        value={skill} 
                        placeholder="Testing" />
                        <BaseButton 
                        type="button" 
                        text="Add" 
                        className="btn btn-secondary py-2.5 px-2"
                        handleOnClick={addSkill}/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">Education 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Institute" 
                        type="text" 
                        onChange={(e)=>onEducationChange("institute" , e.target.value)} 
                        value={education.institute} 
                        placeholder="Institute Name" />

                        <BaseInput 
                        label="Degree" 
                        type="text" 
                        onChange={(e)=>onEducationChange("degree" , e.target.value)} 
                        value={education.degree} 
                        placeholder="BE" />

                        <BaseInput 
                        label="PassoutYear" 
                        type="number" 
                        onChange={(e)=>onEducationChange("passoutYear" , e.target.value)} 
                        value={education.passoutYear}  />
                        <BaseButton 
                        type="button" 
                        text="Add" 
                        className="btn btn-secondary py-2.5 px-2"
                        handleOnClick={addEducation}/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">Experience 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Company" 
                        type="text" 
                        onChange={(e)=>onExperienceChange("company", e.target.value)} 
                        value={experience.company} 
                        placeholder="Company Name" />

                        <BaseInput 
                        label="Role" 
                        type="text" 
                        onChange={(e)=>onExperienceChange("role", e.target.value)} 
                        value={experience.role} 
                        placeholder="Tester" />

                        <BaseInput 
                        label="Years" 
                        type="number"  
                        onChange={(e)=>onExperienceChange("years", e.target.value)} 
                        value={experience.years}  />
                        
                        <BaseInput 
                        label="Noticeperiod" 
                        type="text" 
                        onChange={(e)=>onExperienceChange("noticePeriod", e.target.value)} 
                        value={experience.noticePeriod}
                        placeholder="30-45"  />
                        <BaseButton 
                        type="button" 
                        text="Add" 
                        className="btn btn-secondary py-2.5 px-2"
                        handleOnClick={addExperience}/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">Project 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Name" 
                        type="text" 
                        onChange={(e)=>onProjectChange("name", e.target.value)} 
                        value={project.name} 
                        placeholder="Project Name" />

                        <BaseInput 
                        label="Description" 
                        type="text" 
                        onChange={(e)=>onProjectChange("description", e.target.value)} 
                        value={project.description} 
                        placeholder="About Project" />
                        
                        <BaseInput 
                        label="Github" 
                        type="text" 
                        onChange={(e)=>onProjectLinkChange("github", e.target.value)} 
                        value={project.links.github}
                        placeholder="Project-Github-Link"  />

                        <BaseInput 
                        label="Live" 
                        type="text" 
                        onChange={(e)=>onProjectLinkChange("live", e.target.value)} 
                        value={project.links.live}
                        placeholder="Project-Live-Link"  />

                        <BaseInput 
                        label="Demo" 
                        type="text" 
                        onChange={(e)=>onProjectLinkChange("demo", e.target.value)} 
                        value={project.links.demo}
                        placeholder="Project-Demo-Link"  />

                        <BaseInput 
                        label="Article" 
                        type="text" 
                        onChange={(e)=>onProjectLinkChange("article", e.target.value)} 
                        value={project.links.article}
                        placeholder="Project-Article-Link"  />

                        <BaseButton 
                        type="button" 
                        text="Add" 
                        className="btn btn-secondary py-2.5 px-2"
                        handleOnClick={addProject}/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">SocialMedia 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Name" 
                        type="text" 
                        onChange={(e)=>onSocialMediaChange("name", e.target.value)} 
                        value={socialMedia.name} 
                        placeholder="SocialMedia Name" />

                        <BaseInput 
                        label="Link" 
                        type="text" 
                        onChange={(e)=>onSocialMediaChange("link", e.target.value)} 
                        value={socialMedia.link} 
                        placeholder="SocialMedia-Link" />

                        <BaseButton 
                        type="button" 
                        text="Add" 
                        className="btn btn-secondary py-2.5 px-2"
                        handleOnClick={addSocialMedia}/>
                    </div>

                    <BaseButton
                    isLoading={isLoading} 
                    type="submit" 
                    text="Create" 
                    className="btn btn-primary py-2.5 px-2 w-full"/>
                </form>
            </div>
        </div>
    )
}